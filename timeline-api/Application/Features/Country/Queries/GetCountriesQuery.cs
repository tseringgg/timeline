using Application.Features.Event.Queries;
using AutoMapper;
using Data.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Country.Queries
{
    public record GetCountriesQuery : IRequest<List<CountryDto>>;
    public sealed class GetCountriesQueryHandler : IRequestHandler<GetCountriesQuery, List<CountryDto>>
    {
        private ITimelinesDbContext _dbContext;
        private IMapper _mapper;

        public GetCountriesQueryHandler(ITimelinesDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<CountryDto>> Handle(GetCountriesQuery request, CancellationToken cancellationToken)
        {
            var dboList = await _dbContext.Country
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            return _mapper.Map<List<CountryDto>>(dboList);
        }
    }
}
