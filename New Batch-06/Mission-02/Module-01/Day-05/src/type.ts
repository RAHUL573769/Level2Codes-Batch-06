{
    type AddFun = (num1: number, num2: number) => number;

    const add: AddFun = (num1, num2) => {
        return num1 + num2;
    };

    type Employee = {
        designation: string
        teamSize: string
    }
    type Manager = {

    }

    type User = {
        name: number
        age: number
    }
    interface IUser {
        name: string
        age: string
    }
    type FriendArray = string[]
    const friendsArrayType: FriendArray = ["A", "B", "C"]
    console.log(friendsArrayType)
    interface IFriends {
        [index: number]: string
    }
    const friendsArrayInterface: IFriends = ["A", "B", "C"]

    // const friendsArrayInterfa
}