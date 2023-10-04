using AutoMapper;
using Data.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.Event.Queries
{
    public record GetEventsQuery : IRequest<List<EventDto>>;
    public sealed class GetEventsQueryHandler : IRequestHandler<GetEventsQuery, List<EventDto>>
    {
        private ITimelinesDbContext _dbContext;
        private IMapper _mapper;

        public GetEventsQueryHandler(ITimelinesDbContext dbContext, IMapper mapper) 
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<EventDto>> Handle(GetEventsQuery request, CancellationToken cancellationToken)
        {
            var dboList = await _dbContext.Event
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            return _mapper.Map<List<EventDto>>(dboList);
        }
    }
}
