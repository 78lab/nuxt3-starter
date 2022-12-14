import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user',()=>{

    const savedName = ref('')

    function setNewName(name: string){
        savedName.value = name
    }

    return {
        setNewName,
        savedName
    }
})