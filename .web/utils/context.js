import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {"available_questions": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], "camel_case_example_word": "camelCase", "camel_list_example": ["camelCase", "lasagnaCasserole", "waterPipe", "trainStation"], "check_if_done": false, "color_camel": "black", "color_kebab": "black", "correct_answers": [3, 0, 2, 0, 2, 1, 3, 3, 1, 0, 2, 0, 0, 2, 0, 3, 0, 2, 0, 2, 1, 3, 3, 1, 0, 2, 0, 0, 2, 0], "experiment": "None or little", "index_camel": 0, "index_instruction": 0, "index_kebab": 0, "index_question": 16, "instruction": "click here !", "instructions": ["click here !", "a sentence written in a normal style will be shown to you...", " you have to find the same word but written differently between multiple options...", "the experiment will not progress until you choose the correct option...", "example: ant colony", "", "As you have noticed, the options were written in camelCase...", "the next example will be in kebab-case...", "wild west", "", "great !", "before starting the experiment please answer the following question", ""], "is_show_options": false, "kebab_case_example_word": "kebab-case", "kebab_list_example": ["kebab-case", "lasagna-casserole", "water-pipe", "train-station"], "options": ["None or little", "intermediate or expert"], "removed_answers": [], "results": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "start": false, "time_end": -1, "time_start": -1, "words_3_answers": [["bil-salmon-fish", "big-salmon-dish", "big-saumon-fish", "big-salmon-fish"], ["set-int-array", "wet-imt-array", "set-imt-array", "set-int-aray"], ["incement-curr-prob", "increment-cur-prob", "increment-curr-prob", "icrement-curr-prob"], ["big-hunting-hound", "big-hunting-pound", "big-hunting-gound", "big-huting-hound"], ["swollen-kiney-beans", "swollen-kidney-bean", "swollen-kidney-beans", "swolen-kidey-beans"], ["denser-transposed-matrix", "dense-transposed-matrix", "dense-trnsposed-matrix", "dense-transposed-matrice"], ["the-stabby-night", "the-starry-niht", "the-stary-night", "the-starry-night"], ["climate-sattellite-image", "climte-satellite-image", "climate-satelite-iamge", "climate-satellite-image"], ["calculating-ortibal-trajectory", "calculating-orbital-trajectory", "calaculating-oribital-trajectory", "calculating-orbital-rajectory"], ["advanced-statistical-model", "adavanced-statistical-model", "advanced-stastical-model", "advanced-statisctal-model"], ["car-racng-tournament", "car-dacing-tournament", "car-racing-tournament", "car-racing tournamnent"], ["below-zero-degrees", "below-zero-egrees", "belaw-zero-degrees", "below-zero-degree"], ["setting-environment-variables", "seting-environment-variables", "setting-evironment-variables", "setting-enviromnnet-variable"], ["vectr-space-model", "vector-space-modl", "vector-space-model", "vector-space-modem"], ["wild-west-movie", "wil-west-movie", "willy-west-movie", "wild-west-movi"], ["bilSalmonFish", "bigSalmonDish", "bigSaumonFish", "bigSalmonFish"], ["setIntArray", "wetImtArray", "setImtArray", "setIntrray"], ["incementCurrProb", "incrementCurProb", "incrementCurrProb", "icrementCurrProb"], ["bigHuntingHound", "bigHuntingPound", "bigHuntingGound", "bigHutingHound"], ["swollenKineyBeans", "swollenKidneyBean", "swollenKidneyBeans", "swolenKideyBeans"], ["denserTransposedMatrix", "denseTransposedMatrix", "denseTrnsposedMatrix", "densetTransposedMatrice"], ["theStabbyNight", "theStarryNiht", "theStaryNight", "theStarryNight"], ["climateSattelliteImage", "climteSatelliteImage", "climateSateliteIamge", "climateSatelliteImage"], ["calculatingOrtibalTrajectory", "calculatingOrbitalTrajectory", "calaculatingOribitalTrajectory", "calculatingOrbitalRajectory"], ["advancedStatisticalModel", "adavancedStatisticalModel", "advancedStasticalModel", "advancedStatisctalModel"], ["carRacngTournament", "carDacingTournament", "carRacingTournament", "carRacingTournamnent"], ["belowZeroDegrees", "belowZeroEgrees", "belawZeroDegrees", "belowZeroDegree"], ["settingEnvironmentVariables", "setingEnvironmentVariables", "settingEvironmentVariables", "settingEnviromnnetVariable"], ["vectrSpaceModel", "vectorSpaceModl", "vectorSpaceModel", "vectorSpaceModem"], ["wildWestMovie", "wilWestMovie", "willyWestMovie", "wildWestMovi"]], "words_3_questions": ["big salmon fish", "set int array", "increment curr prob", "big hunting hound", "swollen kidney beans", "dense transposed matrix", "the starry night", "climate satellite image", "calculating orbital trajectory", "advanced statistical model", "car racing tournament", "below zero degrees", "setting environment variables", "vector space model", "wild west movie", "big salmon fish", "set int array", "increment curr prob", "big hunting hound", "swollen kidney beans", "dense transposed matrix", "the starry night", "climate satellite image", "calculating orbital trajectory", "advanced statistical model", "car racing tournament", "below zero degrees", "setting environment variables", "vector space model", "wild west movie"]}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}