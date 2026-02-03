/*
<Accordion
    items={[
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 2" },
    ]}
/>
 */
import Accordion from '../../Components/Accordion/Accordion';


const data = [
        {
            title: "What is Github and how does it work?",
            content:
            "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
        },
        {
            title: "How do I see GitHub's availability?",
            content: "Check our real-time status report",
        },
        {
            title: "Why is GitHub so popular?",
            content:
            "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
        },
]


export default function AccordionPage(){
    return (
        <div>
            <h1>Accordion component</h1>
            <p>accordian component, takes in an array of menuitems, each has title and content. Each heading can be opened and closed individually. Users can open multiple headings at the same time. </p>

            <Accordion items={data} />

        </div>
    )
}