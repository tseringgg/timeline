using AutoMapper;
using Data.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.Timeline.Queries
{
    public record GetTimelinesQuery : IRequest<List<TimelineDto>>;
    public sealed class GetTimelinesQueryHandler : IRequestHandler<GetTimelinesQuery, List<TimelineDto>>
    {
        private ITimelinesDbContext _dbContext;
        private IMapper _mapper;

        public GetTimelinesQueryHandler(ITimelinesDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<List<TimelineDto>> Handle(GetTimelinesQuery request, CancellationToken cancellationToken)
        {
            var dboList = await _dbContext.Timeline
                            .AsNoTracking()
                            .Include("Event")
                            .ToListAsync(cancellationToken);

            return _mapper.Map<List<TimelineDto>>(dboList);
        }
    }
}
