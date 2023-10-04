using Application.Features.Timeline.Queries;
using AutoMapper;
using Data.Entities;
using MediatR;

namespace Application.Features.Timeline.Commands
{
    public record CreateTimelineCommand(CreateTimelineDto Dto) : IRequest<TimelineDto>;
    public sealed class CreateTimelineCommandHandler : IRequestHandler<CreateTimelineCommand, TimelineDto>
    {
        private ITimelinesDbContext _dbContext;
        private IMapper _mapper;

        public CreateTimelineCommandHandler(ITimelinesDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<TimelineDto> Handle(CreateTimelineCommand request, CancellationToken cancellationToken)
        {
            var dbo = _mapper.Map<Data.Entities.Timeline>(request.Dto);

            _dbContext.Timeline.Add(dbo);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return _mapper.Map<TimelineDto>(dbo);
        }
    }
}
