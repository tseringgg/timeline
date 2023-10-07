using Application.Features.Country.Queries;
using Application.Features.Event.Commands;
using Application.Features.Event.Queries;
using Application.Features.Image.Queries;
using Application.Features.Reference.Queries;
using Application.Features.Timeline.Queries;
using Application.Features.User.Queries;
using AutoMapper;
using Data.Entities;

namespace Application.Common.Mappings;
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<TimelineDto, Timeline>()
            .ForMember(dest => dest.Event, opt => opt.MapFrom(src => src.Events))
            .ReverseMap();
        CreateMap<EventDto, Event>()
        //.ForSourceMember(x => x.ImageUrls, opt => opt.DoNotValidate())
        //.ForSourceMember(x => x.ReferenceUrls, opt => opt.DoNotValidate());
        .ForMember(dest => dest.Reference, opt => opt.MapFrom(src => src.References))
        .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.Images));
        //.ReverseMap();

        CreateMap<Event, EventDto>()
        .ForMember(dest => dest.References, opt => opt.MapFrom(src => src.Reference))
        .ForMember(dest => dest.Images, opt => opt.MapFrom(src => src.Image));
        //.ForMember(dest => dest.ReferenceUrls, opt => opt.MapFrom(src => src.Reference.Select(x => x.Url).ToList()))
        //.ForMember(dest => dest.ImageUrls, opt => opt.MapFrom(src => src.Image.Select(x => x.ImageUrl).ToList()));

        CreateMap<CreateEventDto, Event>().ForSourceMember(x => x.ImageUrls, opt => opt.DoNotValidate());
        CreateMap<CreateEventDto, Event>().ForSourceMember(x => x.ReferenceUrls, opt => opt.DoNotValidate());
        CreateMap<UserDto, User>().ReverseMap();
        CreateMap<CountryDto, Country>().ReverseMap();
        CreateMap<ImageDto, Image>().ReverseMap();
        CreateMap<ReferenceDto, Reference>().ReverseMap();
    }
}
