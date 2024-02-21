export const ApiOWConstant = {
    apiKey: 'd2ab339e073ea8c6ea0412469341454e',
    getUrl: function(lat:number, lon:number): string {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    },
    getForecastUrl: function(lat:number, lon:number): string {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    }
};
