//  CALCULATE ALCOHOL
//  Utility written inline and then externalized to optimize and clean up the component
//
//  Copyright Jori Hiltunen 2023

import LOCAL_DEFAULTS from "../constants/en_defaults"
import CONTENT from "../constants/en";

/**
 * Set a callback function state after calculation
 * @param {event} e                     Function triggering event
 * @param {number} weight               Weight of the person
 * @param {number} bottles              Amount of bottles of beer consumed
 * @param {number} time                 Time in hours after consumption started
 * @param {string} gender               Gender of the person
 * @param {function} promillesResult    React callback handler
 */

const calculateAlco = (e, weight, bottles, time, gender, promillesResult, weightReset) => {
    e.preventDefault();

    const litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    const burning = weight / 10
    grams = grams - (burning * +time)

    // If gender is female 0.6, otherwise 0.7 (to handle non-binary sexes)
    const genderModifier = (gender === "Female") ? 0.6 : 0.7

    let result = grams / (weight * genderModifier)

    // Check for impossible input
    if (!isNaN(result) && result <= 1000 && weight != 0) {
        result = (result < 0) ? 0 : result.toFixed(2)
        promillesResult(result)
    } else {
        weightReset(LOCAL_DEFAULTS.WEIGHT)
        promillesResult(CONTENT.ERROR_MESSAGE)
    }
}

export default calculateAlco