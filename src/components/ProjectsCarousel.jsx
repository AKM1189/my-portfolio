import { Carousel } from "@mantine/carousel";
import { Image, Text, Button, Group, Modal, Stack, Badge } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDisclosure } from "@mantine/hooks";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function ProjectsCarousel({ projects }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%", md: "33.33%" }}
      slideGap="lg"
      align="start"
      slidesToScroll={1}
      loop
      classNames={{
        indicators: "mb-4",
        indicator: "!w-2 !h-2 !rounded-full !bg-slate-200 data-[active=true]:!bg-primary data-[active=true]:!w-8 !transition-all",
        control:
          "!border-0 !bg-white !text-slate-700 !shadow-lg hover:!bg-primary hover:!text-white !transition-colors",
        viewport: "overflow-visible",
        container: "items-stretch",
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {projects.map((project, index) => (
        <Carousel.Slide key={index} className="py-4">
          <ProjectCard project={project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

function ProjectCard({ project }) {
  const [opened, { open, close }] = useDisclosure(false);
  const techList = project.technologies.split(",").map((t) => t.trim()).slice(0, 3);

  return (
    <>
      <article
        className="group relative h-full flex flex-col bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
        onClick={open}
      >
        {/* Image section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 flex-wrap">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-white/90 text-slate-700 rounded-lg backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary border border-slate-200 rounded-lg hover:border-primary/30 transition-colors"
              >
                <FaGithub className="text-base" />
                {/* Code */}
              </a>
            )}
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FaArrowUpRightFromSquare className="text-sm" />
                {/* Live */}
              </a>
            )}
          </div>
        </div>
      </article>

      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text fw={700} size="lg" className="text-slate-800">
            {project.title}
          </Text>
        }
        centered
        size="lg"
        radius="xl"
        padding="xl"
        classNames={{
          root: "hide-scrollbar",
          body: "hide-scrollbar",
          content: "border border-slate-100 shadow-2xl",
          header: "border-b h-16 border-slate-100",
        }}
      >
        <Stack gap="lg" pt={20}>
          <div className="rounded-xl overflow-hidden border border-slate-100">
            <Image src={project.image} alt={project.title} className="object-cover" h={250} />
          </div>

          <div>
            <Text fw={600} mb="xs" className="text-slate-800">
              About the Project
            </Text>
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
              {project.description}
            </Text>
          </div>

          <div>
            <Text fw={600} mb="xs" className="text-slate-800">
              Technologies
            </Text>
            <Group gap="xs">
              {project.technologies.split(",").map((tech) => (
                <Badge key={tech} variant="light" color="teal" size="lg" className="font-medium">
                  {tech.trim()}
                </Badge>
              ))}
            </Group>
          </div>

          <Group justify="flex-end" gap="sm" mt="md">
            {project.githubLink && (
              <a
                variant="outline"
                component="a"
                href={project.githubLink}
                target="_blank"
                size="sm"
                radius="md"
                // className="border-primary text-primary hover:bg-primary hover:text-white"
                className="inline-flex !text-primary items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:!text-primary border !border-slate-200 rounded-lg hover:!border-primary/30 transition-colors"
              //  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.previewLink && (
              <a
                component="a"
                href={project.previewLink}
                target="_blank"
                size="sm"
                radius="md"
                // className="bg-primary hover:bg-primary-dark"
                // className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary border border-slate-200 rounded-lg hover:border-primary/30 transition-colors"
 className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium !bg-primary text-white rounded-lg hover:!bg-primary/90 transition-colors"
              >
                Live Preview
              </a>
            )}
          </Group>
        </Stack>
      </Modal>
    </>
  );
}

export default ProjectsCarousel;
