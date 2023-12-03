import { ScrollArea, Box, Heading, Flex, Text, Table } from "@radix-ui/themes";
import Header from "./header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className=" bg-slate-600 w-full h-[906px] flex justify-center items-center gap-64 text-gray-100 font-sans tracking-wide">
        <ScrollArea
          type="always"
          scrollbars="vertical"
          size="3"
          radius="full"
          style={{ height: 160, width: 600 }} className=" text-3xl"
        >
          <Box p="2" pr="8">
            <Heading size="6" mb="2" trim="start">
              Treino de formulários e autenticações react
            </Heading>
            <Flex direction="column" gap="4">
              <Text as="p">
                Three fundamental aspects of typography are legibility,
                readability, and aesthetics. Although in a non-technical sense
                “legible” and “readable” are often used synonymously,
                typographically they are separate but related concepts.
              </Text>

              <Text as="p">
                Legibility describes how easily individual characters can be
                distinguished from one another. It is described by Walter Tracy
                as “the quality of being decipherable and recognisable”. For
                instance, if a “b” and an “h”, or a “3” and an “8”, are
                difficult to distinguish at small sizes, this is a problem of
                legibility.
              </Text>

              <Text as="p">
                Typographers are concerned with legibility insofar as it is
                their job to select the correct font to use. Brush Script is an
                example of a font containing many characters that might be
                difficult to distinguish. The selection of cases influences the
                legibility of typography because using only uppercase letters
                (all-caps) reduces legibility.
              </Text>
            </Flex>
          </Box>
        </ScrollArea>
        <Table.Root className=" w-[600px] p-2 rounded" size="3" variant="surface">
          <Table.Header>
            <Table.Row >
              <Table.ColumnHeaderCell className=" text-stone-200">Nome</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className=" text-stone-200">Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className=" text-stone-200">Group</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </main>
    </div>
  );
}
