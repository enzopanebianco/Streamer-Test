using Microsoft.AspNetCore.Mvc;
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
    public class CourseController : Controller
    {
        private readonly CourseService courseService;
        public CourseController(CourseService _courseService)
        {
            courseService = _courseService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(courseService.Index());
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
