ReactDOM.render(<SearchPage searchAPI={window.searchSpoontacular}
                            saveIngredient={window.saveIngredient}
                            getIngredient={window.getIngredient}
                            removeIngredient={window.removeIngredient}
                            />, document.getElementById('app'));