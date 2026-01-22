import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Badge, Button, Group, Modal } from '@mantine/core';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useDisclosure } from '@mantine/hooks';


function ProjectsCarousel() {
      const autoplay = useRef(Autoplay({ delay: 3000 }));
    const [opened, { open, close }] = useDisclosure(false);
useEffect(() => {
    console.log('opened', opened);
}, [opened])
  return (
    <div>
        <Carousel
      slideSize="33.33%"
    //   height={500}
      slideGap="md"
      controlsOffset="sm"
      controlSize={26}
      withControls
    //   withIndicators
      className='w-full'
       emblaOptions={{ loop: true, align: 'start', slidesToScroll: 1 }}
      classNames={{
        indicators: '-mb-14',
        indicator: 'bg-gray-200! data-[active=true]:bg-primary! h-1!'
      }}
      plugins={[autoplay.current]}
       onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Carousel.Slide ><ProjectCard open={open} /></Carousel.Slide>
      <Carousel.Slide ><ProjectCard open={open} /></Carousel.Slide>
      <Carousel.Slide ><ProjectCard open={open} /></Carousel.Slide>
      <Carousel.Slide ><ProjectCard open={open} /></Carousel.Slide>

    </Carousel>
     <Modal opened={opened} onClose={close} title={"Project Details"} centered>
        Project Details
      </Modal>
    </div>
  );
}

export default ProjectsCarousel;

function ProjectCard({open}) {
  return (
   <div>
     <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={600} >Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <div className='flex justify-end'>
        <Button color='transparent' className='text-base! font-normal! text-primary! hover:bg-transparent!' mt="md" radius="md"
        onClick={() => {
            open()

        }}>
       Detail {">>"}
      </Button>
      </div>
    </Card>
     
   </div>
  );
}