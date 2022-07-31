using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using timeline.data;
using timeline.dto;

namespace timeline.domain.Repo
{
    public class EventRepo
    {
        IMapper _mapper;
        public EventRepo(IMapper mapper)
        {
            _mapper = mapper;
        }
        public IEnumerable<EventDto> GetAll()
        {
            var dtoEntities = new List<EventDto>();
            using(var dbContext = new TimelineDbContext())
            {
                var dbEntities = dbContext.Events.ToList();

                dtoEntities = _mapper.Map<List<EventDto>>(dbEntities);
            }
            return dtoEntities;
        }

        public EventDto Get(int eventId)
        {
            var dtoEntity = new EventDto();
            using (var dbContext = new TimelineDbContext())
            {
                var dbEntity = dbContext.Events.Where(x => x.Id == eventId);

                if (dbEntity == null)
                {
                    throw new KeyNotFoundException();
                }

                dtoEntity = _mapper.Map<EventDto>(dbEntity);
            }
            return dtoEntity;
        }

        public void Create(EventDto dto)
        {
            if (dto == null)
            {
                throw new ArgumentNullException();
            }
            
            var dboEntity = _mapper.Map<Event>(dto);
            
            using (var dbContext = new TimelineDbContext())
            {
                var dbEntity = dbContext.Events.Add(dboEntity);

                dbContext.SaveChanges();
            }
        }
        public void Patch(int eventId, bool isReviewed, bool isApproved)
        {
            using (var dbContext = new TimelineDbContext())
            {
                var dbEntity = dbContext.Events.FirstOrDefault(x => x.Id == eventId); 

                if (dbEntity == null)
                {
                    throw new KeyNotFoundException();
                }
                dbEntity.IsReviewed = isReviewed;
                dbEntity.IsApproved = isApproved;
                dbContext.SaveChanges();
            }
        }

        public void Delete(int eventId)
        {
            using (var dbContext = new TimelineDbContext())
            {
                var removedEvent = dbContext.Events.FirstOrDefault(x => x.Id == eventId);


                dbContext.Events.Remove(removedEvent);
                dbContext.SaveChanges();
            }
        }
    }
}
