using System;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
         IGenericRepository<IEntity> Repository<IEntity>() where IEntity : BaseEntity;
         Task<int> Complete();
    }
}
