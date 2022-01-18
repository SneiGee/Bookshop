using System;
using System.Collections;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext _context;
        private Hashtable _repository;
        public UnitOfWork(StoreContext context)
        {
            this._context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<IEntity> Repository<IEntity>() where IEntity : BaseEntity
        {
            if (_repository == null) _repository = new Hashtable();

            var type = typeof(IEntity).Name;

            if (!_repository.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(IEntity)), _context);

                _repository.Add(type, repositoryInstance);
            }

            return (GenericRepository<IEntity>) _repository[type];
        }
    }
}