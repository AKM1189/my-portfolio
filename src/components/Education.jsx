import data from '../../data/education.json';

const Education = () => {
    const { education } = data;
    return (
        <section id="my-education" class="my-education mb-32">
            <h3 className="side-title mb-10">My Education</h3>
            <div class="education md:grid md:grid-cols-2 gap-5">
                {education.map(data => <EducationCard data={data} />)}
            </div>
        </section>
    )
}

const EducationCard = ({ data }) => {
    return (
        <div class="mb-10 min-h-44">
            <div class="flex items-start">
                <span class="rounded-full bg-indigo-600 p-2"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                    </svg>
                </span>
                <div className="ms-5">
                    <p className="degree-name">{data.title}</p>
                </div>
            </div>
            <div className="ps-10 ms-5 border-s-2 border-indigo-200">
                <p className="university">
                    {data.location}
                    <span className="duration"> {data.years} </span>
                </p>
                <p className="text-gray-500">
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default Education