import { GridItem, Heading, Center, Link, Image } from "@chakra-ui/react";

interface IProps {
  title: string;
  url: string;
  imgPath: string;
}

const AppCard = ({ title, url, imgPath }: IProps) => {
  return (
    <Link
      bg="blue.500"
      href={url}
      rounded="xl"
      style={{ textDecoration: "none" }}
    >
      <GridItem
        p="32px"
        style={{ height: "100%" }}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Center flexFlow="column">
          <Image
            height={[300, null, 400]}
            width={[300, null, 400]}
            src={imgPath}
          />
        </Center>
        <Heading size={["md", null, "lg"]}>{title}</Heading>
      </GridItem>
    </Link>
  );
};

export default AppCard;
