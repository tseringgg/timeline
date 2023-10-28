using Microsoft.VisualStudio.TestPlatform.TestHost;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkCreateTimelineEvents.Helpers
{
    public class TestBase : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        public TestBase()
        {
            
        }
    }
}
