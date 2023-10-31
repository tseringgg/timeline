using Application.Common.Enums;
using Application.Features.Event.Commands;
using BulkCreateTimelineEvents.Helpers;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Graph;
using Microsoft.VisualBasic;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Timelines.Tools.BulkCreateTimelineEvents;

namespace BulkCreateTimelineEvents
{
    public class BulkUploadEvents : TestBase
    {
        private readonly HttpClient _httpClient;
        private string baseUrl = "api/events";
        private Dictionary<string, int> _countriesDictionary;
        public BulkUploadEvents(CustomWebApplicationFactory<Program> factory) 
        {
            _countriesDictionary = new Dictionary<string, int>();
            _countriesDictionary.Add("Tibet", 1);
            _countriesDictionary.Add("China", 2);
            _countriesDictionary.Add("India", 3);
            _countriesDictionary.Add("Nepal", 4);
            _countriesDictionary.Add("Bhutan", 5);
            _countriesDictionary.Add("Pakistan", 6);
            _countriesDictionary.Add("Mongolia", 7);
            _countriesDictionary.Add("Israel", 8);
            _countriesDictionary.Add("Sri Lanka", 9);

            _countriesDictionary.Add("Japan", 10);
            _countriesDictionary.Add("Korea", 11);
            _countriesDictionary.Add("Iran", 12);
            _countriesDictionary.Add("Europe", 13);
            _countriesDictionary.Add("Americas", 14);
            _countriesDictionary.Add("South Africa", 15);
            _countriesDictionary.Add("North Africa", 16);
            _countriesDictionary.Add("Baltistan", 17);


            // Tibet, China, India, Nepal, Bhutan, Pakistan, Baltistan, Mongolia, Israel, Sri Lanka,
            // Japan, Korea, Iran, Europe, Americas, South Africa, North Africa

            _httpClient = factory.CreateClient(new WebApplicationFactoryClientOptions
            {
                AllowAutoRedirect = false,
            });

            _httpClient.DefaultRequestHeaders.Authorization =
                    new System.Net.Http.Headers.AuthenticationHeaderValue(scheme: TestAuthHandler.testAuthScheme);
        }

        [Theory]
        [ExcelData("TimelineEvents.xlsx", "select * from [Sheet1$A1:H22]")]
        public async Task BulkUploadTimelineEvents(string title, string description, string era, int year, string? eventDate, string imageUrls, string referenceUrls, string countryName)
        {
            var newEvent = new CreateEventDto
            {
                Title = title,
                Description = description,
                Era = era,
                Year = year,
                EventDate = !string.IsNullOrEmpty(eventDate) ? DateTime.Parse(eventDate) : null,
                ImageUrls = imageUrls.Split(';'),
                ReferenceUrls = referenceUrls.Split(';'),
                CountryId = _countriesDictionary[countryName]
            };

            var request = new HttpRequestMessage(HttpMethod.Post, baseUrl);
            request.Content = new StringContent(System.Text.Json.JsonSerializer.Serialize(newEvent), Encoding.UTF8, "application/json");

            // act
            var createResponse = await _httpClient.SendAsync(request);

            // assert
            //Assert.Equal(200, (int)createResponse.StatusCode);
            //var responseBody = await createResponse.Content.ReadAsStringAsync();
            //var returnedEvent = JsonConvert.DeserializeObject<CreateEventDto>(responseBody);
            //Assert.Equal(newEvent, returnedEvent);
        }
    }
}
