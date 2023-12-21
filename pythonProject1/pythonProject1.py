"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import random
import pandas as pd
from rxconfig import config
from typing import List
import reflex as rx
from random import choice
import time
import os

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""
    color_camel: str = "black"
    color_kebab: str = "black"
    options: List[str] = ["None or little", "intermediate or expert"]
    experiment: str = "None or little"
    start: bool = False

    index_kebab = 0
    index_camel = 0
    index_instruction = 0
    kebab_list_example = ["kebab-case", "lasagna-casserole", "water-pipe", "train-station"]
    camel_list_example = ["camelCase", "lasagnaCasserole", "waterPipe", "trainStation"]
    kebab_case_example_word = kebab_list_example[0]
    camel_case_example_word = camel_list_example[0]

    instructions: List[str] = ["click here !", "a sentence written in a normal style will be shown to you...",
                    " you have to find the same word but written differently between multiple options...",
                    "the experiment will not progress until you choose the correct option...",
                    "example: ant colony", "",
                    "As you have noticed, the options were written in camelCase...",
                    "the next example will be in kebab-case...",
                    "wild west", "",
                    "great !",
                    "before starting the experiment please answer the following question", ""
                    ]

    instruction = instructions[index_instruction]

    words_3_answers: List[List[str]] = [ ["bil-salmon-fish", "big-salmon-dish", "big-saumon-fish",
                                            "big-salmon-fish"],
                                         ["set-int-array", "wet-imt-array", "set-imt-array", "set-int-aray"],
                                         ["incement-curr-prob", "increment-cur-prob", "increment-curr-prob",
                                          "icrement-curr-prob"],
                                         ["big-hunting-hound", "big-hunting-pound", "big-hunting-gound",
                                          "big-huting-hound"],
                                         ["swollen-kiney-beans", "swollen-kidney-bean", "swollen-kidney-beans",
                                          "swolen-kidey-beans"],
                                         ["denser-transposed-matrix", "dense-transposed-matrix",
                                          "dense-trnsposed-matrix", "dense-transposed-matrice"],
                                         ["the-stabby-night", "the-starry-niht", "the-stary-night", "the-starry-night"],
                                         ["climate-sattellite-image", "climte-satellite-image",
                                          "climate-satelite-iamge", "climate-satellite-image"],
                                         ["calculating-ortibal-trajectory", "calculating-orbital-trajectory",
                                          "calaculating-oribital-trajectory", "calculating-orbital-rajectory"],
                                         ["advanced-statistical-model", "adavanced-statistical-model",
                                          "advanced-stastical-model", "advanced-statisctal-model"],
                                         ["car-racng-tournament", "car-dacing-tournament", "car-racing-tournament",
                                          "car-racing tournamnent"],
                                         ["below-zero-degrees", "below-zero-egrees", "belaw-zero-degrees",
                                          "below-zero-degree"],
                                         ["setting-environment-variables", "seting-environment-variables",
                                          "setting-evironment-variables", "setting-enviromnnet-variable"],
                                         ["vectr-space-model", "vector-space-modl", "vector-space-model",
                                          "vector-space-modem"],
                                         ["wild-west-movie", "wil-west-movie", "willy-west-movie", "wild-west-movi"],
                                         ["bilSalmonFish", "bigSalmonDish", "bigSaumonFish",
                                          "bigSalmonFish"],
                                         ["setIntArray", "wetImtArray", "setImtArray", "setIntrray"],
                                         ["incementCurrProb", "incrementCurProb", "incrementCurrProb",
                                          "icrementCurrProb"],
                                         ["bigHuntingHound", "bigHuntingPound", "bigHuntingGound", "bigHutingHound"],
                                         ["swollenKineyBeans", "swollenKidneyBean", "swollenKidneyBeans",
                                          "swolenKideyBeans"],
                                         ["denserTransposedMatrix", "denseTransposedMatrix", "denseTrnsposedMatrix",
                                          "densetTransposedMatrice"],
                                         ["theStabbyNight", "theStarryNiht", "theStaryNight", "theStarryNight"],
                                         ["climateSattelliteImage", "climteSatelliteImage", "climateSateliteIamge",
                                          "climateSatelliteImage"],
                                         ["calculatingOrtibalTrajectory", "calculatingOrbitalTrajectory",
                                          "calaculatingOribitalTrajectory", "calculatingOrbitalRajectory"],
                                         ["advancedStatisticalModel", "adavancedStatisticalModel",
                                          "advancedStasticalModel",
                                          "advancedStatisctalModel"],
                                         ["carRacngTournament", "carDacingTournament", "carRacingTournament",
                                          "carRacingTournamnent"],
                                         ["belowZeroDegrees", "belowZeroEgrees", "belawZeroDegrees", "belowZeroDegree"],
                                         ["settingEnvironmentVariables", "setingEnvironmentVariables",
                                          "settingEvironmentVariables",
                                          "settingEnviromnnetVariable"],
                                         ["vectrSpaceModel", "vectorSpaceModl", "vectorSpaceModel", "vectorSpaceModem"],
                                         ["wildWestMovie", "wilWestMovie", "willyWestMovie", "wildWestMovi"]]

    words_3_questions: List[str] = ["big salmon fish",
                                    "set int array",
                                    "increment curr prob",
                                    "big hunting hound",
                                    "swollen kidney beans",
                                    "dense transposed matrix",
                                    "the starry night",
                                    "climate satellite image",
                                    "calculating orbital trajectory",
                                    "advanced statistical model",
                                    "car racing tournament",
                                    "below zero degrees",
                                    "setting environment variables",
                                    "vector space model",
                                    "wild west movie",
                                    "big salmon fish",
                                    "set int array",
                                    "increment curr prob",
                                    "big hunting hound",
                                    "swollen kidney beans",
                                    "dense transposed matrix",
                                    "the starry night",
                                    "climate satellite image",
                                    "calculating orbital trajectory",
                                    "advanced statistical model",
                                    "car racing tournament",
                                    "below zero degrees",
                                    "setting environment variables",
                                    "vector space model",
                                    "wild west movie"]
    available_questions: List[int] = [i for i in range(0,len(words_3_answers))]
    correct_answers: List[int] = [3,0,2,0,2,1,3,3,1,0,2,0,0,2,0,3,0,2,0,2,1,3,3,1,0,2,0,0,2,0]
    removed_answers: List[int] = []
    results = [0] * len(available_questions)
    # results = pd.DataFrame(columns = [i for i in range(0,len(words_3_answers))])
    time_start = -1
    time_end = -1
    is_show_options = False
    index_question: int = available_questions[
            choice([i for i in range(0, len(available_questions))])]


    def flip_color_kebab_on(self):
        self.color_kebab = "orange"

    def flip_color_kebab_off(self):
        self.color_kebab = "black"

    def flip_color_camel_on(self):
        self.color_camel = "orange"

    def flip_color_camel_off(self):
        self.color_camel = "black"

    def change_word_camel(self):
        self.index_camel += 1
        self.camel_case_example_word = self.camel_list_example[self.index_camel % len(self.camel_list_example)]

    def change_word_kebab(self):
        self.index_kebab = self.index_kebab + 1
        self.kebab_case_example_word = self.kebab_list_example[self.index_kebab % len(self.kebab_list_example)]

    def next_instruction(self):
        if int(self.index_instruction) < len(self.instructions):
            self.index_instruction += 1
            self.instruction = self.instructions[self.index_instruction]



    def pick_next_question(self):
        self.time_end = time.time()
        self.results[self.index_question] = self.time_end - self.time_start
        # print(self.results[self.index_question])
        # print(self.index_question)
        # print(self.words_3_answers[self.index_question])
        self.removed_answers.append(self.index_question)
        if not self.check_if_done:
            self.index_question = self.available_questions[
                choice([i for i in range(0, len(self.available_questions)) if i not in self.removed_answers])]
        else:
            self.index_question = -1
            pd.DataFrame([self.results], columns= [i for i in range(0,len(self.words_3_answers))]).to_csv("./questions.csv", mode='a', header=not os.path.exists("./questions.csv"), index = False)
        self.is_show_options = False


    def show_options(self):
        self.is_show_options = True
        self.time_start = time.time()

    def scramble_correct_answers(self):
        for i in range(0, len(self.words_3_answers)):
            new_correct_position = random.randint(0, 3)
            temp = self.words_3_answers[i][self.correct_answers[i]]
            self.words_3_answers[i][self.correct_answers[i]] = self.words_3_answers[i][new_correct_position]
            self.words_3_answers[i][new_correct_position] = temp
            self.correct_answers[i] = new_correct_position

    @rx.var
    def check_if_done(self) -> bool:
        return len(self.removed_answers) == len(self.words_3_answers)

    def start_experiment(self):
        pd.DataFrame([self.experiment], columns=["experience"]).to_csv("./answers.csv",
                                                                                                      mode='a',
                                                                                                      header=not os.path.exists(
                                                                                                          "./answers.csv"),
                                                                                                              index=False)
        self.scramble_correct_answers()
        self.start = True

    def reset_experiment(self):
        self.experiment = "None or little"
        self.start = False

        self.index_kebab = 0
        self.index_camel = 0
        self.index_instruction = 0
        self.index_question = 0
        self.index_question = 0
        self.kebab_case_example_word = self.kebab_list_example[0]
        self.camel_case_example_word = self.camel_list_example[0]
        self.removed_answers = []
        self.time_start = -1
        self.time_end = -1
        self.instruction = self.instructions[self.index_instruction]



def experiment_page() -> rx.Component:
    return (rx.vstack(rx.cond(~State.check_if_done, rx.vstack(

        rx.text(State.words_3_questions[State.index_question], on_mouse_down=State.show_options),
        rx.cond(State.is_show_options,
                      rx.button_group(
                        rx.cond(State.correct_answers[State.index_question] == 0,
                        rx.button(State.words_3_answers[State.index_question][0], on_mouse_down=State.pick_next_question),
                        rx.button(State.words_3_answers[State.index_question][0])),
                      rx.cond(State.correct_answers[State.index_question] == 1,
                      rx.button(State.words_3_answers[State.index_question][1],
                                on_mouse_down=State.pick_next_question),
                      rx.button(State.words_3_answers[State.index_question][1])),
                      rx.cond(State.correct_answers[State.index_question] == 2,
                      rx.button(State.words_3_answers[State.index_question][2],
                                on_mouse_down=State.pick_next_question),
                      rx.button(State.words_3_answers[State.index_question][2])),
                      rx.cond(State.correct_answers[State.index_question] == 3,
                      rx.button(State.words_3_answers[State.index_question][3],
                                on_mouse_down=State.pick_next_question),
                      rx.button(State.words_3_answers[State.index_question][3])),
                      size="lg"
                      ))

                        )

            , rx.vstack(rx.box("The experiment is over. Thank you for participating!"),
                        rx.button("Retry", on_mouse_down=State.reset_experiment))),
            spacing="1.5em",
            font_size="2em",
            padding_top="300px",
            width="20em%",
            padding_bottom="450px"

            )
            )


def index() -> rx.Component:
    return (

        rx.fragment(
            rx.cond(State.start,
                    rx.vstack(
                        experiment_page())
                    ,
                    rx.vstack(
                        rx.heading("Welcome !", font_size="2em"),
                        rx.box(
                            " What style is faster to read ? 🤨",
                        ),
                        rx.hstack(
                            rx.text(State.camel_case_example_word, font_size="2em",
                                    on_mouse_enter=State.flip_color_camel_on,
                                    on_mouse_leave=State.flip_color_camel_off,
                                    color=State.color_camel, on_mouse_down=State.change_word_camel),
                            rx.spacer(),
                            rx.box("or"),
                            rx.spacer(),
                            rx.text(State.kebab_case_example_word, font_size="2em",
                                    on_mouse_enter=State.flip_color_kebab_on,
                                    on_mouse_leave=State.flip_color_kebab_off,
                                    color=State.color_kebab, on_mouse_down=State.change_word_kebab),
                            width="auto"),
                        rx.spacer(),
                        rx.spacer(),
                        rx.spacer(),
                        rx.spacer(),
                        rx.box("Please help us find out with a quick experiment. 🙏"),
                        rx.heading("Instructions", font_size="1em"),
                        rx.image(src="/arrow.png", width="4em"),
                        rx.spacer(),
                        rx.cond((State.index_instruction != 5) & (State.index_instruction != 9) & (
                                    State.index_instruction != 12),
                                rx.box(State.instruction, font_size="1.5em",
                                       on_mouse_down=State.next_instruction, algin="center",
                                       _hover={"cursor": "pointer"}),
                                rx.cond(State.index_instruction == 5,
                                        rx.button_group(
                                            rx.button("sandColony"),
                                            rx.button("antCastle"),
                                            rx.button("antColony", on_mouse_down=State.next_instruction),
                                            rx.button("bandOnly"), size="lg"),
                                        rx.cond(State.index_instruction == 9,
                                                rx.button_group(
                                                    rx.button("wild-weast"),
                                                    rx.button("feast-wild"),
                                                    rx.button("will-east"),
                                                    rx.button("wild-west", on_mouse_down=State.next_instruction),
                                                    size="lg"
                                                ),
                                                rx.vstack(rx.radio_group(
                                                    rx.text(
                                                        "How much experience do you have with writing/reading code ?"),
                                                    rx.radio_group(
                                                        rx.hstack(
                                                            rx.spacer(),
                                                            rx.foreach(
                                                                State.options,
                                                                lambda option: rx.radio(
                                                                    option, align="center")
                                                            ), align_items="center", align="center",
                                                            spacing="4em",
                                                            # font_size="1.5em",
                                                            # width="40%",
                                                            # padding_left="80px"
                                                        ),
                                                        on_change=State.set_experiment,
                                                        align="center",
                                                        width="75%",
                                                        padding_bottom= "30px",
                                                        padding_top = "30px"
                                                        # padding_left = "100px"
                                                    ),
                                                    rx.spacer(),
                                                    algin="center"
                                                ), rx.spacer(),
                                                    rx.button("Submit and Start the experiment",
                                                              on_mouse_down=State.start_experiment)
                                                )
                                                ))
                                ),
                        spacing="1.5em",
                        font_size="2em",
                        padding_top="12%",
                        padding_bottom="450px",
                    ),

                    )))


# Add state and page to the app.
app = rx.App(stylesheets=["style.css"])
app.add_page(index)
# app.add_page(experiment_page)
app.compile()
