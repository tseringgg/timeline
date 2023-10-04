using Application.Common.Behaviours;
using Azure.Identity;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using System.Reflection;
using WebApi.Security;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigureServices
    {
        //public const string CorsPolicy = "default";
        const string AccessTokenName = "Bearer";
        public static IServiceCollection AddWebApiServices(this IServiceCollection services, WebApplicationBuilder builder)
        {
            /* Application Insight ***/
            builder.Logging.ClearProviders();

            builder.Host.UseSerilog((context, services, loggerConfiguration) => loggerConfiguration
                    .ReadFrom.Configuration(context.Configuration));

            // Add services to the container.
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"))
                    .EnableTokenAcquisitionToCallDownstreamApi()
                        //.AddMicrosoftGraph(builder.Configuration.GetSection("MicrosoftGraph"))
                        .AddInMemoryTokenCaches();

            //builder.Services.AddControllers();
            //// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            //builder.Services.AddEndpointsApiExplorer();
            //builder.Services.AddSwaggerGen();


            builder.Services.AddAuthorization(options =>
            {
                new RoleRequirements<UserRoleRequirement>().Add(options);
                new RoleRequirements<AdminRoleRequirement>().Add(options);
            });

            //builder.Services.AddSingleton<ICurrentUserService, CurrentUserService>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            try
            {
                builder.Services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Timeline.Api", Version = "v1" });
                    c.AddSecurityDefinition(AccessTokenName, new Microsoft.OpenApi.Models.OpenApiSecurityScheme()
                    {
                        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                        Name = "Authorization",
                        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
                        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
                        Scheme = AccessTokenName
                    });

                    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement() {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = AccessTokenName
                            },
                            Scheme = "oauth2",
                            Name = AccessTokenName,
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                        }
                        });
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            builder.Services.AddCors(o => o.AddPolicy(WebApi.Common.Constants.DefaultCorsPolicy, builder =>
            {
                builder.WithOrigins("https://localhost:44327/", "http://localhost:30522/'", "https://localhost:4200", "http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
            }));

            //builder.Host.ConfigureAppConfiguration((context, config) =>
            //{
            //    var defaultCredential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
            //    {
            //        VisualStudioTenantId = builder.Configuration["AzureAd:TenantId"],
            //        ExcludeEnvironmentCredential = true,
            //        ExcludeManagedIdentityCredential = true,
            //    });
            //    config.AddAzureKeyVault(new Uri(builder.Configuration["AzureAd:KeyVaultUri"]), defaultCredential);
            //});

            return services;
        }
    }
}
