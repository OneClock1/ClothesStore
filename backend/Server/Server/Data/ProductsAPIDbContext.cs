using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class ProductsAPIDbContext : DbContext
    {
        public ProductsAPIDbContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Product> Products { get; set; }
    }

    
}
