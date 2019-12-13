// ** Actions Creators **
export const setToys = toys => {
    console.log("setToys=", toys)
    return {
      type: "GET_TOYS_SUCCESS",
      toys
    }
  }



export const getToys = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/toys",
            { credentials: "include",
              method: "GET",
              headers: { "Content-Type": "application/json" },
            })
            .then(r => r.json())
            .then(toys => {
                console.log("toys", toys)
                if (toys.error) {
                    alert(toys.error)
                } else {
                    //debugger
                    dispatch(setToys(toys))
                }
            }


            )
    }
}