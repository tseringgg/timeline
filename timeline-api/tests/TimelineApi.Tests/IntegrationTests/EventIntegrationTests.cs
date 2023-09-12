using Azure.Core;
using Azure;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Text.Unicode;
using System.Threading.Tasks;
using timeline.data;
using Timeline.WebApi.Tests.IntegrationTests.Helpers;
using Xunit;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;
using Newtonsoft.Json;

namespace TimelineApi.Tests.IntegrationTests
{
    public class EventIntegrationTests : TestBase
    {
        private readonly HttpClient _httpClient;
        private string baseUrl = "api/Event";

        public EventIntegrationTests(CustomWebApplicationFactory<Program> factory)
        {
            _httpClient = factory.CreateClient(new Microsoft.AspNetCore.Mvc.Testing.WebApplicationFactoryClientOptions
            {
                AllowAutoRedirect = false
            });

            _httpClient.DefaultRequestHeaders.Authorization =
                new System.Net.Http.Headers.AuthenticationHeaderValue(scheme: TestAuthHandler.testAuthScheme);
        }

        [Fact]
        public async Task CreateNewEvent_Success()
        {
            var newEvent = new Event { };

            var request = new HttpRequestMessage(HttpMethod.Post, baseUrl);
            request.Content = new StringContent(System.Text.Json.JsonSerializer.Serialize(newEvent), Encoding.UTF8, "application/json");

            // act 
            var createResponse = await _httpClient.SendAsync(request); //< ---Response from this does NOT contain the validation error. You need to read the response content async as shown below to see the validation error. 
            var responseConent = await createResponse.Content.ReadAsStringAsync();

            // Assert 
            var getResponse = await _httpClient.GetAsync(baseUrl);
            Assert.Equal(200, (int)createResponse.StatusCode);
            Assert.Equal(200, (int)getResponse.StatusCode);
            var responseBody = await getResponse.Content.ReadAsStringAsync();
            var returnedEvent = JsonConvert.DeserializeObject<Event[]>(responseBody);
            Assert.NotNull(returnedEvent);
            Assert.Equal(newEvent.Title, returnedEvent[0].Title);
        }
    }
}
