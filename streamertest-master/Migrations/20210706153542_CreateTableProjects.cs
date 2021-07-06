using Microsoft.EntityFrameworkCore.Migrations;

namespace SS_API.Migrations
{
    public partial class CreateTableProjects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "varchar(150)", nullable: false),
                    Image = table.Column<string>(type: "varchar(150)", nullable: true),
                    What = table.Column<string>(type: "varchar(150)", nullable: true),
                    Why = table.Column<string>(type: "varchar(150)", nullable: true),
                    WhatWillWeDo = table.Column<string>(type: "varchar(150)", nullable: true),
                    ProjectStatus = table.Column<int>(type: "varchar(150)", nullable: false),
                    CourseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Projects_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Projects_CourseId",
                table: "Projects",
                column: "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
