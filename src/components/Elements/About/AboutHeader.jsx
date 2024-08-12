import { Box, Heading, Image, Stack, Text, Highlight } from "@chakra-ui/react";

export const AboutHeader = () => {
    return (
        <Stack
            w='100%'
            h={{lg:'100vh'}}
            alignItems='center'
            justifyContent='center'
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 2, lg: 14 }}
            p={{ base: '4rem 1.4rem', lg: '2rem 4rem' }}
            aria-labelledby="about-heading"
        >
            <Image
                boxSize={{ base: '15rem', lg: '24rem' }}
                src='/assets/images/team.svg'
                alt='Team animation'
                aria-hidden='true'
                data-aos='zoom-in'
                data-aos-duration='1000'
            />
            <Box
                textAlign={{ base: 'center', lg: 'start' }}
                data-aos='zoom-in'
                data-aos-duration='1000'
            >
                <Heading
                    as='h1'
                    fontWeight='bold'
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    color='primary'
                    lineHeight={1.7}
                    aria-labelledby="about-heading"
                >
                    Tentang Tugasku
                </Heading>
                <Text
                    mt='4'
                    color='font'
                    fontSize={{ base: '1rem', lg: 'lg' }}
                    lineHeight={1.7}
                >
                    <Highlight
                        query={['Tugasku', 'cepat', 'efisien', 'terbaik']}
                        styles={{ px: '2', py: '1', bg: 'yellow.200', rounded: 'md' }}
                    >
                        {"Tugasku adalah layanan profesional yang berdedikasi untuk membantu menyelesaikan berbagai tugas kuliah dengan cepat dan efisien. Didirikan pada tahun 2024, kami terus berkembang dalam menyediakan jasa joki tugas dengan kualitas terbaik."}
                    </Highlight>
                    <br />
                    <Highlight
                        query={['Tugasku', 'cepat', 'efisien']}
                        styles={{ px: '2', py: '1', bg: 'yellow.200', rounded: 'md' }}
                    >
                        {"Dengan Tugasku, Anda dapat merasa tenang dan fokus pada hal-hal penting lainnya, sementara tugas Anda ditangani oleh para ahli kami yang berpengalaman."}
                    </Highlight>
                </Text>
            </Box>
        </Stack>
    )
}
