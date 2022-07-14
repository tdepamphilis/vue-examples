<template>
<div>

    
<div class="text-center">
    <v-menu
      
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
   
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0C5297"
          dark
          v-bind="attrs"
          v-on="on"
          style="display: flex; align-items: center; justify-content: space-around; margin-left: 20px;"
        >
          Menú
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title>Menú</v-list-item-title>
            
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-expansion-panels
        multiple
        style="max-width: 300px;"
        >

          


            


            <v-expansion-panel>
            <v-expansion-panel-header><b>Templates</b></v-expansion-panel-header>
                <v-expansion-panel-content class="menu-option">
                    <p v-on:click="selectTableCustomPaginator()"> DataTable with custom paginator</p>
                </v-expansion-panel-content>              
            </v-expansion-panel>
        </v-expansion-panels>

      </v-card>
    </v-menu>
  </div>
    


    </div>
</template>

<script>
export default {
    name: 'HamburguerMenu',
    data(){
        return {

        }
    },
    methods: {
        selectTableCustomPaginator(){
            this.$router.push('/table-custom-paginator')
        },
    }
}
</script>

<style scoped>
.fade-enter-from{
    opacity: 0;
}
.fade-enter-to{
    opacity: 1;
}
.fade-enter-active{
    transition: all 1s ease;
}
.fade-leave-from{
    opacity: 1;
}
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
    transition: all 1s ease;
}

#icon{
    width: 200px;
    padding-bottom: 1%;
    padding-top: 1%;
    color: #0C5297;
    width: 35px;
    font-size: 22px;
}

.modal-fade{
    width: 100%;
    height: 3000px;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top:0px;
    right: 50%;
    transform: translate(50%, 0);
}

.menu{
    margin: 0;
}

.menu-container{
    width: 450px;
    /* background-color: #fff; */
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.cross-container{
    display: flex;
    justify-content: flex-end;
    
}

#cross{
    color: #fff;
    font-size: 30px;
    margin: 5px;
}

.menu-comerciales{
    width: 300px;
    padding-bottom: 20px;
    margin: 0 auto;
} 
.dropdown-button{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.button-menuComerciales{
    width: 150px;
    font-weight: 700;
    font-size: 13px;
    color: #000000;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 3px;
    border: 0.2px solid #ccc;
    padding-top: 2px;
    padding-bottom: 2px;
}
.button-menuComerciales:hover{
    background-color: #a9d3ef;
}
.opciones-menuComerciales{
    width: 280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.opcion-menuComerciales{
    margin-top: 4px;
    margin-bottom: 4px;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    font-size: 12px;
    letter-spacing: 0.018em;
}

.opcion-menuComerciales:hover{
    text-decoration: underline;
}





.menu-backoffice{
    width: 300px;
    padding-bottom: 20px;
    margin: 0 auto;
} 

.button-backoffice{
    width: 150px;
    font-weight: 700;
    font-size: 13px;
    color: #000000;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 3px;
    border: 0.2px solid #ccc;
    padding-top: 2px;
    padding-bottom: 2px;
}
.button-backoffice:hover{
    background-color: #a9d3ef;
}
.opciones-backoffice{
    width: 280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.opcion-backoffice{
    margin-top: 4px;
    margin-bottom: 4px;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    font-size: 12px;
    letter-spacing: 0.018em;
}

.opcion-backoffice:hover{
    text-decoration: underline;
}




.menu-wealth{
    width: 300px;
    padding-bottom: 20px;
    margin: 0 auto;
} 

.button-wealth{
    width: 150px;
    font-weight: 700;
    font-size: 13px;
    color: #000000;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 3px;
    border: 0.2px solid #ccc;
    padding-top: 2px;
    padding-bottom: 2px;
}
.button-wealth:hover{
    background-color: #a9d3ef;
}
.opciones-wealth{
    width: 280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.opcion-wealth{
    margin-top: 4px;
    margin-bottom: 4px;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    font-size: 12px;
    letter-spacing: 0.018em;
}

.opcion-wealth:hover{
    text-decoration: underline;
}






.menu-icon{
    font-size: 15px;
    color: #93c8eb;
}

.menu-option{
    text-align: left;
    font-size: 14px;
}

.menu-option:hover{
    text-decoration: underline;
}
    
</style>