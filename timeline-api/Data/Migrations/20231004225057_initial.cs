using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    CountryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    TagId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.TagId);
                });

            migrationBuilder.CreateTable(
                name: "Timeline",
                columns: table => new
                {
                    TimelineId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Era = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    CenturyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timeline", x => x.TimelineId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    MiddleName = table.Column<string>(name: "Middle Name", type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    UserPrincipalName = table.Column<string>(type: "nchar(60)", fixedLength: true, maxLength: 60, nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Era = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    TimelineId = table.Column<int>(type: "int", nullable: false),
                    IsReviewed = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    IsApproved = table.Column<bool>(type: "bit", nullable: false),
                    ReviewerUserId = table.Column<int>(type: "int", nullable: true),
                    ReviewDate = table.Column<DateTime>(type: "date", nullable: true),
                    CreatorUserId = table.Column<int>(type: "int", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "date", nullable: false),
                    ApproverUserId = table.Column<int>(type: "int", nullable: true),
                    ApproveDate = table.Column<DateTime>(type: "date", nullable: true),
                    LastUpdateDate = table.Column<DateTime>(type: "date", nullable: true),
                    LastUpdaterUserId = table.Column<int>(type: "int", nullable: true),
                    EventDate = table.Column<DateTime>(type: "date", nullable: true),
                    CountryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventId);
                    table.ForeignKey(
                        name: "FK_Event_Country",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "CountryId");
                    table.ForeignKey(
                        name: "FK_Event_Timeline",
                        column: x => x.TimelineId,
                        principalTable: "Timeline",
                        principalColumn: "TimelineId");
                    table.ForeignKey(
                        name: "FK_Event_User_ApproverUserId",
                        column: x => x.ApproverUserId,
                        principalTable: "User",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_Event_User_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "User",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_Event_User_LastUpdaterUserId",
                        column: x => x.LastUpdaterUserId,
                        principalTable: "User",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_Event_User_ReviewerUserId",
                        column: x => x.ReviewerUserId,
                        principalTable: "User",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "Event_Tag",
                columns: table => new
                {
                    TagId = table.Column<int>(type: "int", nullable: false),
                    EventId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_Event_Tag_Event",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "EventId");
                    table.ForeignKey(
                        name: "FK_Event_Tag_Tag",
                        column: x => x.TagId,
                        principalTable: "Tag",
                        principalColumn: "TagId");
                });

            migrationBuilder.CreateTable(
                name: "Image",
                columns: table => new
                {
                    ImageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageUrl = table.Column<string>(type: "nvarchar(2083)", maxLength: 2083, nullable: false),
                    EventId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.ImageId);
                    table.ForeignKey(
                        name: "FK_Image_Image",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "EventId");
                });

            migrationBuilder.CreateTable(
                name: "Reference",
                columns: table => new
                {
                    ReferenceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<int>(type: "int", nullable: false),
                    Url = table.Column<string>(type: "nvarchar(2083)", maxLength: 2083, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reference", x => x.ReferenceId);
                    table.ForeignKey(
                        name: "FK_Reference_Event",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "EventId");
                });

            migrationBuilder.InsertData(
                table: "Country",
                columns: new[] { "CountryId", "Name" },
                values: new object[,]
                {
                    { 1, "Tibet" },
                    { 2, "China" },
                    { 3, "India" },
                    { 4, "Nepal" },
                    { 5, "Bhutan" },
                    { 6, "Pakistan" },
                    { 7, "Mongolia" }
                });

            migrationBuilder.InsertData(
                table: "Timeline",
                columns: new[] { "TimelineId", "CenturyId", "Era" },
                values: new object[,]
                {
                    { 1, 1, "BC" },
                    { 2, 200, "BC" },
                    { 3, 300, "BC" },
                    { 4, 400, "BC" },
                    { 5, 500, "BC" },
                    { 6, 600, "BC" },
                    { 7, 700, "BC" },
                    { 8, 800, "BC" },
                    { 9, 900, "BC" },
                    { 10, 1000, "BC" },
                    { 11, 1100, "BC" },
                    { 12, 1200, "BC" },
                    { 13, 1300, "BC" },
                    { 14, 1400, "BC" },
                    { 15, 1500, "BC" },
                    { 16, 1600, "BC" },
                    { 17, 1700, "BC" },
                    { 18, 1800, "BC" },
                    { 19, 1900, "BC" },
                    { 20, 2000, "BC" },
                    { 21, 100, "BC" },
                    { 22, 2100, "BC" },
                    { 23, 2200, "BC" },
                    { 24, 2300, "BC" },
                    { 25, 2400, "BC" },
                    { 26, 2500, "BC" },
                    { 27, 2600, "BC" },
                    { 28, 2700, "BC" },
                    { 29, 2800, "BC" },
                    { 30, 2900, "BC" },
                    { 31, 3000, "BC" },
                    { 32, 3100, "BC" },
                    { 33, 3200, "BC" },
                    { 34, 3300, "BC" },
                    { 35, 3400, "BC" },
                    { 36, 3500, "BC" },
                    { 37, 1, "AD" },
                    { 38, 100, "AD" },
                    { 39, 200, "AD" },
                    { 40, 300, "AD" },
                    { 41, 400, "AD" },
                    { 42, 500, "AD" },
                    { 43, 600, "AD" },
                    { 44, 700, "AD" },
                    { 45, 800, "AD" },
                    { 46, 900, "AD" },
                    { 47, 1000, "AD" },
                    { 48, 1100, "AD" },
                    { 49, 1200, "AD" },
                    { 50, 1300, "AD" },
                    { 51, 1400, "AD" },
                    { 52, 1500, "AD" },
                    { 53, 1600, "AD" },
                    { 54, 1700, "AD" },
                    { 55, 1800, "AD" },
                    { 56, 1900, "AD" },
                    { 57, 2000, "AD" },
                    { 58, 2100, "AD" }
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "UserId", "Email", "FirstName", "IsDeleted", "LastName", "Middle Name", "UserPrincipalName" },
                values: new object[] { 1, "dhawa.ngoche@hotmail.com", "Dhawa", false, "Ngoche", "Dhondup", "kkssadmin@11lypf.onmicrosoft.com" });

            migrationBuilder.CreateIndex(
                name: "IX_Event_ApproverUserId",
                table: "Event",
                column: "ApproverUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_CountryId",
                table: "Event",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_CreatorUserId",
                table: "Event",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_LastUpdaterUserId",
                table: "Event",
                column: "LastUpdaterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_ReviewerUserId",
                table: "Event",
                column: "ReviewerUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_TimelineId",
                table: "Event",
                column: "TimelineId");

            migrationBuilder.CreateIndex(
                name: "UC_Event",
                table: "Event",
                columns: new[] { "Title", "CountryId", "Era" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Event_Tag_EventId",
                table: "Event_Tag",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_Tag_TagId",
                table: "Event_Tag",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_Image_EventId",
                table: "Image",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_Reference_EventId",
                table: "Reference",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "UC_Timeline",
                table: "Timeline",
                columns: new[] { "Era", "CenturyId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Event_Tag");

            migrationBuilder.DropTable(
                name: "Image");

            migrationBuilder.DropTable(
                name: "Reference");

            migrationBuilder.DropTable(
                name: "Tag");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropTable(
                name: "Timeline");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
