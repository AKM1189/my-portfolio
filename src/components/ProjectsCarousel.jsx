import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Button, Group, Modal, Stack, Badge } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useDisclosure } from '@mantine/hooks';

function ProjectsCarousel({ projects }) {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      slideSize="33.33%"
      slideGap="md"
      align="start"
      slidesToScroll={1}
      loop
      classNames={{
        indicators: '-mb-14',
        indicator: 'bg-gray-200! data-[active=true]:bg-primary! h-1!',
        control: "-ms-20 -me-20 size-10",
        viewport: 'flex items-stretch',
        container: 'flex items-stretch',
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {projects.map((project, index) => (
        <Carousel.Slide key={index} className='flex'>
          <ProjectCard project={project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

function ProjectCard({ project }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className='flex flex-col w-full'
        h={'100%'}
      >
        <Card.Section>
          <Image
            src={project.image}
            height={200}
            alt={project.title}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600} size='lg'>{project.title}</Text>
        </Group>

        <div className='grow'>
          <Text size="sm" c="dimmed">
            {project.description.slice(0, 200)}
            {project.description.length > 200 && (
              <>
                ...
              </>
            )}
          </Text>
        </div>
        <div className='flex justify-end gap-3 mt-4'>
          <Button
            variant="outline"
            component="a"
            className='border-primary! text-primary!'
            radius={'md'}
            size='sm'
            onClick={open}
          >
            Detail
          </Button>
        </div>

      </Card>

      {/* User-Friendly Detailed Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={<Text fw={700} size="lg">{project.title}</Text>}
        centered
        size="lg"
        radius="md"
        padding="xl"
      >
        <Stack>
          <Card withBorder p={0} radius={'md'}>
            <Image
              src={project.image}
              alt={project.title}
              maxHeight={300}
            />
          </Card>

          <div>
            <Text fw={600} mb={5}>About the Project</Text>
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
              {project.description}
            </Text>
          </div>

          <div>
            <Text fw={600} mb={5}>Technologies Used</Text>
            <Group gap="xs" mt={10}>
              {project.technologies.split(',').map((tech) => (
                <Badge key={tech} variant="light" color="var(--color-primary)">
                  {tech.trim()}
                </Badge>
              ))}
            </Group>
          </div>

          <div className='flex justify-end gap-3 mt-4'>
            {project.githibLink && <Button
              variant="outline"
              component="a"
              href={project.githubLink}
              className='border-primary! text-primary!'
              target='_blank'
              size='sm'
              radius={'md'}
            >
              GitHub
            </Button>}

            {project.previewLink && <Button
              component="a"
              href={project.previewLink}
              className='bg-primary!'
              target='_blank'
              size='sm'
              radius={'md'}
            >
              Preview
            </Button>}
          </div>
        </Stack>
      </Modal>
    </>
  );
}

export default ProjectsCarousel;