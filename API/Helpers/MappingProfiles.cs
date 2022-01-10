using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(s => s.ProductBrand, d => d.MapFrom(m => m.ProductBrand.Name))
                .ForMember(s => s.ProductType, d => d.MapFrom(m => m.ProductType.Name))
                .ForMember(s => s.PictureUrl, d => d.MapFrom<ProductUrlResolver>());
            CreateMap<Address, AddressDto>().ReverseMap();
        }
    }
}