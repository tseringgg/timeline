using Application.Features.Event.Queries;
using AutoMapper;
using Data.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.Event.Commands
{
    public record CreateEventCommand(CreateEventDto Dto, string? UserPrincipalName) : IRequest<EventDto>;
    public sealed class CreateEventCommandHandler : IRequestHandler<CreateEventCommand, EventDto>
    {
        private ITimelinesDbContext _dbContext;
        private IMapper _mapper;

        public CreateEventCommandHandler(ITimelinesDbContext dbContext, IMapper mapper) 
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<EventDto> Handle(CreateEventCommand request, CancellationToken cancellationToken)
        {
            var user = await _dbContext.User.FirstOrDefaultAsync(x => x.UserPrincipalName == request.UserPrincipalName, cancellationToken);
            if (user == null)
            {
                throw new KeyNotFoundException(nameof(user));
            }

            var dbo = _mapper.Map<Data.Entities.Event>(request.Dto);

            dbo.CreateDate = DateTime.Now;
            dbo.CreatorUserId = user.UserId;

            _dbContext.Event.Add(dbo);
            _dbContext.Image.AddRange(dbo.Image);
            _dbContext.Reference.AddRange(dbo.Reference);

            await _dbContext.SaveChangesAsync(cancellationToken);

            return _mapper.Map<EventDto>(dbo);
        }
    }
}
