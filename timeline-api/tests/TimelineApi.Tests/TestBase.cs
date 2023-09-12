using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Timeline.WebApi.Tests.IntegrationTests.Helpers;
using Xunit;

namespace TimelineApi.Tests
{
    public class TestBase : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        public TestBase()
        {
            
        }

        public static Mock<DbSet<T>> CreateDbSetMock<T>(IQueryable<T> query) where T : class
        {
            var dbSetMock = new Mock<DbSet<T>>();

            dbSetMock.As<IAsyncEnumerable<T>>()
                .Setup(x => x.GetAsyncEnumerator(default))
                .Returns(new TestAsyncEnumerator<T>(query.GetEnumerator()));

            dbSetMock.As<IQueryable<T>>()
                .Setup(x => x.Provider)
                .Returns(new TestAsyncQueryProvider<T>(query.Provider));

            dbSetMock.As<IQueryable<T>>()
              .Setup(x => x.Expression)
              .Returns(query.Expression);

            dbSetMock.As<IQueryable<T>>()
                  .Setup(x => x.ElementType)
                  .Returns(query.ElementType);

            dbSetMock.As<IQueryable<T>>()
                  .Setup(x => x.GetEnumerator())
                  .Returns(query.GetEnumerator());

            return dbSetMock;

        }
    }
}
