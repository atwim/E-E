
/** @jsxImportSource @emotion/react */import { Fragment, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Box, Button, ButtonGroup, Heading, HStack, Image as ChakraImage, Radio, RadioGroup, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Fragment_6a9d3a3a1895a3510d4d04922af18ef8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.start) ? (
  <Fragment>
  <VStack>
  <VStack spacing={`1.5em`} sx={{"fontSize": "2em", "paddingTop": "300px", "width": "20em%", "paddingBottom": "450px"}}>
  <Fragment>
  {isTrue(!state__state.check_if_done) ? (
  <Fragment>
  <VStack>
  <Text onMouseDown={(_e) => addEvents([Event("state.state.show_options", {})], (_e), {})}>
  {state__state.words_3_questions.at(state__state.index_question)}
</Text>
  <Fragment>
  {isTrue(state__state.is_show_options) ? (
  <Fragment>
  <ButtonGroup size={`lg`}>
  <Fragment>
  {isTrue((state__state.correct_answers.at(state__state.index_question) === 0)) ? (
  <Fragment>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.pick_next_question", {})], (_e), {})}>
  {state__state.words_3_answers.at(state__state.index_question).at(0)}
</Button>
</Fragment>
) : (
  <Fragment>
  <Button>
  {state__state.words_3_answers.at(state__state.index_question).at(0)}
</Button>
</Fragment>
)}
</Fragment>
  <Fragment>
  {isTrue((state__state.correct_answers.at(state__state.index_question) === 1)) ? (
  <Fragment>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.pick_next_question", {})], (_e), {})}>
  {state__state.words_3_answers.at(state__state.index_question).at(1)}
</Button>
</Fragment>
) : (
  <Fragment>
  <Button>
  {state__state.words_3_answers.at(state__state.index_question).at(1)}
</Button>
</Fragment>
)}
</Fragment>
  <Fragment>
  {isTrue((state__state.correct_answers.at(state__state.index_question) === 2)) ? (
  <Fragment>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.pick_next_question", {})], (_e), {})}>
  {state__state.words_3_answers.at(state__state.index_question).at(2)}
</Button>
</Fragment>
) : (
  <Fragment>
  <Button>
  {state__state.words_3_answers.at(state__state.index_question).at(2)}
</Button>
</Fragment>
)}
</Fragment>
  <Fragment>
  {isTrue((state__state.correct_answers.at(state__state.index_question) === 3)) ? (
  <Fragment>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.pick_next_question", {})], (_e), {})}>
  {state__state.words_3_answers.at(state__state.index_question).at(3)}
</Button>
</Fragment>
) : (
  <Fragment>
  <Button>
  {state__state.words_3_answers.at(state__state.index_question).at(3)}
</Button>
</Fragment>
)}
</Fragment>
</ButtonGroup>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</VStack>
</Fragment>
) : (
  <Fragment>
  <VStack>
  <Box>
  {`The experiment is over. Thank you for participating!`}
</Box>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.reset_experiment", {})], (_e), {})}>
  {`Retry`}
</Button>
</VStack>
</Fragment>
)}
</Fragment>
</VStack>
</VStack>
</Fragment>
) : (
  <Fragment>
  <VStack spacing={`1.5em`} sx={{"fontSize": "2em", "paddingTop": "12%", "paddingBottom": "450px"}}>
  <Heading sx={{"fontSize": "2em"}}>
  {`Welcome !`}
</Heading>
  <Box>
  {` What style is faster to read ? 🤨`}
</Box>
  <HStack sx={{"width": "auto"}}>
  <Text onMouseDown={(_e) => addEvents([Event("state.state.change_word_camel", {})], (_e), {})} onMouseEnter={(_e) => addEvents([Event("state.state.flip_color_camel_on", {})], (_e), {})} onMouseLeave={(_e) => addEvents([Event("state.state.flip_color_camel_off", {})], (_e), {})} sx={{"fontSize": "2em", "color": state__state.color_camel}}>
  {state__state.camel_case_example_word}
</Text>
  <Spacer/>
  <Box>
  {`or`}
</Box>
  <Spacer/>
  <Text onMouseDown={(_e) => addEvents([Event("state.state.change_word_kebab", {})], (_e), {})} onMouseEnter={(_e) => addEvents([Event("state.state.flip_color_kebab_on", {})], (_e), {})} onMouseLeave={(_e) => addEvents([Event("state.state.flip_color_kebab_off", {})], (_e), {})} sx={{"fontSize": "2em", "color": state__state.color_kebab}}>
  {state__state.kebab_case_example_word}
</Text>
</HStack>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Box>
  {`Please help us find out with a quick experiment. 🙏`}
</Box>
  <Heading sx={{"fontSize": "1em"}}>
  {`Instructions`}
</Heading>
  <ChakraImage src={`/arrow.png`} sx={{"width": "4em"}}/>
  <Spacer/>
  <Fragment>
  {isTrue((state__state.index_instruction !== 5) && (state__state.index_instruction !== 9) && (state__state.index_instruction !== 12)) ? (
  <Fragment>
  <Box onMouseDown={(_e) => addEvents([Event("state.state.next_instruction", {})], (_e), {})} sx={{"fontSize": "1.5em", "algin": "center", "_hover": {"cursor": "pointer"}}}>
  {state__state.instruction}
</Box>
</Fragment>
) : (
  <Fragment>
  {isTrue((state__state.index_instruction === 5)) ? (
  <Fragment>
  <ButtonGroup size={`lg`}>
  <Button>
  {`sandColony`}
</Button>
  <Button>
  {`antCastle`}
</Button>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.next_instruction", {})], (_e), {})}>
  {`antColony`}
</Button>
  <Button>
  {`bandOnly`}
</Button>
</ButtonGroup>
</Fragment>
) : (
  <Fragment>
  {isTrue((state__state.index_instruction === 9)) ? (
  <Fragment>
  <ButtonGroup size={`lg`}>
  <Button>
  {`wild-weast`}
</Button>
  <Button>
  {`feast-wild`}
</Button>
  <Button>
  {`will-east`}
</Button>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.next_instruction", {})], (_e), {})}>
  {`wild-west`}
</Button>
</ButtonGroup>
</Fragment>
) : (
  <Fragment>
  <VStack>
  <RadioGroup sx={{"algin": "center"}}>
  <Text>
  {`How much experience do you have with writing/reading code ?`}
</Text>
  <RadioGroup onChange={(_e0) => addEvents([Event("state.state.set_experiment", {value:_e0})], (_e0), {})} sx={{"align": "center", "width": "75%", "paddingBottom": "30px", "paddingTop": "30px"}}>
  <HStack alignItems={`center`} spacing={`4em`} sx={{"align": "center"}}>
  <Spacer/>
  {state__state.options.map((option, index_cc0919e3bcefc5e7fd9cf5cf6a4dac26) => (
  <Radio key={index_cc0919e3bcefc5e7fd9cf5cf6a4dac26} sx={{"align": "center"}} value={option}>
  {option}
</Radio>
))}
</HStack>
</RadioGroup>
  <Spacer/>
</RadioGroup>
  <Spacer/>
  <Button onMouseDown={(_e) => addEvents([Event("state.state.start_experiment", {})], (_e), {})}>
  {`Submit and Start the experiment`}
</Button>
</VStack>
</Fragment>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
</VStack>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  <Fragment_6a9d3a3a1895a3510d4d04922af18ef8/>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
