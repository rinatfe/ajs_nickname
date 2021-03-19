export default class Validator {
    validateUsername(name) {
       return /(?!.*(.)\d{4})^[^\d-_][-\w]*[^\d-_]$/.test(name)
    }
}