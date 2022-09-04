//using Microsoft.AspNetCore.Authentication;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.Identity.Web;

//var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"))
//        .EnableTokenAcquisitionToCallDownstreamApi()
//            .AddMicrosoftGraph(builder.Configuration.GetSection("MicrosoftGraph"))
//            .AddInMemoryTokenCaches();

//builder.Services.AddControllers();
//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthentication();
//app.UseAuthorization();

//app.MapControllers();

//app.Run();
//------------------------------------------------------------------
using AutoMapper; 
using timeline.domain; 
using Microsoft.AspNetCore.Authentication; 
using Microsoft.AspNetCore.Authentication.JwtBearer; 
using Microsoft.Identity.Web; 
using Microsoft.OpenApi.Models;
using timeline.data;

var configureAutoMapper = (WebApplicationBuilder builder) =>
{
    var config = new MapperConfiguration(c =>
    {
        c.AddProfile(new MappingProfile());
    });

    var mapper = config.CreateMapper();
    builder.Services.AddSingleton(mapper);
};

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddDbContext<TimelineDbContext>((options, context) => context.UseInMemoryDatabase(new Guid().ToString()));

// Add services to the container. 
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"))
    .EnableTokenAcquisitionToCallDownstreamApi()

            .AddMicrosoftGraph(builder.Configuration.GetSection("MicrosoftGraph"))
            //.AddDownstreamWebApi("DownstreamApi",builder.Configuration.GetSection("DownstreamApi")) 
            .AddInMemoryTokenCaches();

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("User", policy =>
    {
        policy.RequireAssertion(ctx =>
        {
            var f = ctx.User.Claims.FirstOrDefault(c => c.Value == "Basic_User");
            return f != null;
        });
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Timeline.Api", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme()
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement() {
    {
        new OpenApiSecurityScheme
        {
            Reference = new OpenApiReference
            {
                Type = ReferenceType.SecurityScheme,
                Id = "Bearer"
            },
            Scheme = "oauth2",
            Name = "Bearer",
            In = ParameterLocation.Header,
        },
        new List<string>()
        }
    });
});

builder.Services.AddCors(o => o.AddPolicy("default", builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
}));

configureAutoMapper(builder);

var app = builder.Build();

// Configure the HTTP request pipeline. 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

    app.UseSwagger();
    app.UseSwaggerUI();

app.UseCors("default");
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
