using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace timeline.data.Migrations
{
    public partial class FirstUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Timelines_TimelineID",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_TimelineID",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventId",
                table: "Timelines");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Timelines",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Timelines",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "TimelineID",
                table: "Events",
                newName: "TimelineId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Events",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Events",
                newName: "Title");

            migrationBuilder.AlterColumn<int>(
                name: "TimelineId",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Era",
                table: "Events",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Era",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Timelines",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Timelines",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "TimelineId",
                table: "Events",
                newName: "TimelineID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Events",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Events",
                newName: "Name");

            migrationBuilder.AddColumn<int>(
                name: "EventId",
                table: "Timelines",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "TimelineID",
                table: "Events",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Events_TimelineID",
                table: "Events",
                column: "TimelineID");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Timelines_TimelineID",
                table: "Events",
                column: "TimelineID",
                principalTable: "Timelines",
                principalColumn: "ID");
        }
    }
}
