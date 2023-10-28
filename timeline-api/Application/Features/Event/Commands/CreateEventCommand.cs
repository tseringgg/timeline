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
            var existingEntity = await _dbContext.Event
                                    .FirstOrDefaultAsync(x => x.Title == request.Dto.Title);
            if (existingEntity != null)
            {
                return _mapper.Map<EventDto>(existingEntity);
            }

            var user = await _dbContext.User.FirstOrDefaultAsync(x => x.UserPrincipalName == request.UserPrincipalName, cancellationToken);
            if (user == null)
            {
                throw new KeyNotFoundException(nameof(user));
            }

            var dbo = _mapper.Map<Data.Entities.Event>(request.Dto);

            var centuryIdCalculated = request.Dto.Year >= 100 ? (request.Dto.Year / 100) * 100 : 1;
            var timeline = await _dbContext.Timeline.FirstOrDefaultAsync(x => x.CenturyId == centuryIdCalculated && x.Era == request.Dto.Era);

            dbo.TimelineId = timeline.TimelineId;

            dbo.CreateDate = DateTime.Now;
            dbo.CreatorUserId = user.UserId;

            _dbContext.Event.Add(dbo);

            request.Dto.ImageUrls.ToList().ForEach(i =>
            {
                dbo.Image.Add(new Data.Entities.Image() { EventId = dbo.EventId, ImageUrl = i });
            });
            _dbContext.Image.AddRange(dbo.Image);

            request.Dto.ReferenceUrls.ToList().ForEach(i =>
            {
                dbo.Reference.Add(new Data.Entities.Reference() { EventId = dbo.EventId, Url = i });
            });
            _dbContext.Reference.AddRange(dbo.Reference);

            await _dbContext.SaveChangesAsync(cancellationToken);

            return _mapper.Map<EventDto>(dbo);
        }
    }
}
