const calculateAlco = (weight, bottles, time, gender, promillesResult) => {
    console.log(weight, bottles, time, gender)

    const litres = +bottles * 0.33
    let grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsleft = grams - (burning * +time)
    const genderModifier = (gender === "Female") ? 0.6 : 0.7


    let result = gramsleft / (weight * genderModifier)

    console.log(result)
    result = (result < 0) ? 0 : result
    result = result.toFixed(2)

    promillesResult(result)
}

export default calculateAlco