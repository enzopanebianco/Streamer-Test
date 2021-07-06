using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SS_API.Services;
using SS_API.Model;

namespace SS_API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private readonly ProjectService projectService;
        public ProjectController(ProjectService _projectService)
        {
            projectService = _projectService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(projectService.Index());
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Post(Project project)
        {

            try
            {
                projectService.Create(project);

                return Ok(project.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                Project project = projectService.GetProjectById(id);
                if (project == null)
                {
                    return NotFound();
                }

                return Ok(project);
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        [HttpGet]
        [Route("course_id/{id}")]
        
        public IActionResult GetByCourse(int id)
        {
            try
            {

                List<Project> projects = projectService.GetProjectByCourseId(id);
                
                if (projects == null)
                {
                    return NotFound();
                }

                return Ok(projects);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
       

        [HttpPut]
        public IActionResult Update(Project project)
        {
            try
            {
                projectService.UpdateProject(project);
                return Ok(true);
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }
        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            try
            {
                projectService.DeleteProject(id);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

        }

    }
}