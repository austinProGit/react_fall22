import React from "react";

function Projects() {
    return(
        <>
        <section class="projects" id="projects">
            <h2 class="projects-title">My Recent Projects</h2>
            <div class="projects-container">
                <div class="project-container project-card">
                    <h3 class="project-title">SmartScheduler</h3>
                    <p class="project-details">This python application helps students schedule a valid path to graduation given current course requirements and course availabilities.</p>
                    <a href="https://github.com/austinProGit/scheduler" class="project-link">See my work!</a>
                </div>
                <div class="project-container project-card">
                    <h3 class="project-title">PlayerVersus</h3>
                    <p class="project-details">A text-based C# game designed to showcase the Object Oriented Programming paradigm. Fight monsters, solve riddles, and win!</p>
                    <a href="https://github.com/austinProGit/PlayerVersus" class="project-link">See my work!</a>
                </div>
                <div class="project-container project-card">
                    <h3 class="project-title">We Solve It!</h3>
                    <p class="project-details">A simple Java application that assists with the management and scheduling of doctors, patients, and COVID vaccinations.</p>
                    <a href="https://github.com/austinProGit/WeSolveItProject" class="project-link">See my work!</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects