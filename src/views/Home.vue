<template>
  <div>
    <div class="header">
      <div class="container container-header">

        <div class="logo">
        <router-link class="about-link" tag="a" to="/" title="На главную">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
        </router-link>
      </div>

      <div class="header-items">

      <p class="header-item">
        Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж
      </p>

      <p class="header-item">
        Мы работаем: ежедневно с 10:00 до 21:00
      </p>

      </div>

      <div class="header-info">

      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>

      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>

      <router-link class="link" tag="a" to="/about" title="О нас">О нас</router-link>
        
      </div>

      </div>
    </div>

    
      <div class="search">
        <div class="container container-search">
          <div></div>
          <div :class="containerInput" class="search-input">
            <div class="container container-input">
              <input
                ref="searchGame"
                v-model="search"
                type="text"
                placeholder="Поиск игры..."
                autofocus
                class="search-game"
              >
            </div>
          </div>

          <button @click="showInput()" :class="buttonInput" ref="buttonGame" class="toggle-search"></button>
        </div>
      </div>


    <section>
      <back-to-top visibleoffset="500">
        <img :src="this.publicPath + 'up.svg'" alt="Наверх" width="15px" height="15px" title="Наверх">
      </back-to-top>
      <div class="container container--tabs">

        <vk-tabs align="justify">

<!--           <vk-tabs-item title="ВСЕ">
            <div class="container container-select">
              <div class="select-container">
                <label class="label-genre" for="genre">Выбрать жанр</label>
                <select v-model="genre" id="genre" class="uk-select">
                  <option :selected="genre === 'все'" value="все">все</option>
                  <option>симулятор</option>
                  <option>шутер</option>
                  <option>экшн</option>
                  <option>аркада</option>
                  <option>гонка</option>
                  <option>интерактивное кино</option>
                </select>
              </div>
            </div>
            <div class="wrapper container">
      <div class="item" v-for="game in showGames" :key="game.id">
        <router-link tag="div" :to="{ name : 'Id', params: {id: game.id}}" class="card">
          <div class="card-genre" v-text="game.genre"></div>
          <div class="card-desc">
            <h3 v-text="game.title" class="game-title"></h3>
            <p v-text="game.description" class="game-desc"></p>
          </div>
          <img v-bind:src="game.thumbnail" class="card-image">
        </router-link>
      </div>
    </div>
          </vk-tabs-item> -->

          <vk-tabs-item v-bind:title="'HTC ' + '(' + this.$store.state.games.filter(game => game.category==='htc').length + ')'">
            <div class="container container-select">
              <div class="select-container">
                <div class="select-item">
                  <label class="label-genre" for="genre">Выбрать жанр</label>
                  <select v-model="genre" id="genre" class="uk-select">
                    <option :selected="genre === 'все'" value="все">все</option>
                    <option>симулятор</option>
                    <option>шутер</option>
                    <option>экшн</option>
                    <option>музыкальная</option>
                    <option>хоррор</option>
                    <option>спорт</option>
                    <option>квест</option>
                    <option>стратегия</option>
                    <option>головоломка</option>
                    <option>аттракцион</option>
                    <option>приключение</option>
                    <option>творчество</option>
                    <option>многопользовательская</option>
                  </select>
                </div>

                <div class="select-item  select-item--checkbox">
                  <label for="isChild" class="label-genre">Для детей</label>
                  <input v-model="isChild" type="checkbox" id="isChild">
                </div>
              </div>
            </div>
            <div class="wrapper container">
              <div class="item" v-for="game in showGamesByHTC" :key="game.id">
                <router-link tag="div" :to="{ name : 'Id', params: {id: game.id}}" class="card" title="Перейти к игре">
                  <div class="card-genre" v-text="game.genre"></div>
                  <div class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                  </div>
                  <img v-bind:src="game.thumbnail" class="card-image">
                </router-link>
              </div>
            </div>
          </vk-tabs-item>

          <vk-tabs-item v-bind:title="'PSVR ' + '(' + this.$store.state.games.filter(game => game.category==='psvr').length + ')'">
            <div class="container container-select">
              <div class="select-container">
                <div class="select-item">
                  <label class="label-genre" for="genre">Выбрать жанр</label>
                  <select v-model="genre" id="genre" class="uk-select">
                    <option :selected="genre === 'все'" value="все">все</option>
                    <option>симулятор</option>
                    <option>экшн</option>
                    <option>аркада</option>
                    <option>гонка</option>
                    <option>хоррор</option>
                    <option>квест</option>
                    <option>аттракцион</option>
                    <option>приключение</option>
                    <option>многопользовательская</option>
                  </select>
                </div>

                <div class="select-item">
                  <label for="isChild" class="label-genre">Для детей</label>
                  <input v-model="isChild" type="checkbox" id="isChild">
                </div>
              </div>
            </div>
            <div class="wrapper container">
              <div class="item" v-for="game in showGamesByPSVR" :key="game.id">
                <router-link tag="div" :to="{ name : 'Id', params: {id: game.id}}" class="card" title="Перейти к игре">
                  <div class="card-genre" v-text="game.genre"></div>
                  <div class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                  </div>
                  <img v-bind:src="game.thumbnail" class="card-image">
                </router-link>
              </div>
            </div>
          </vk-tabs-item>

          <vk-tabs-item v-bind:title="'PS4 ' + '(' + this.$store.state.games.filter(game => game.category==='ps').length + ')'">
            <div class="container container-select">
              <div class="select-container">
                <div class="select-item">
                  <label class="label-genre" for="genre">Выбрать жанр</label>
                  <select v-model="genre" id="genre" class="uk-select">
                    <option :selected="genre === 'все'" value="все">все</option>
                    <option>шутер</option>
                    <option>экшн</option>
                    <option>ролевая</option>
                    <option>музыкальная</option>
                    <option>аркада</option>
                    <option>гонка</option>
                    <option>спорт</option>
                    <option>файтинг</option>
                    <option>песочница</option>
                    <option>приключение</option>
                    <option>интерактивное кино</option>
                    <option>многопользовательская</option>
                  </select>
                </div>

                <div class="select-item">
                  <label for="isChild" class="label-genre">Для детей</label>
                  <input v-model="isChild" type="checkbox" id="isChild">
                </div>
              </div>
            </div>
            <div class="wrapper container">
              <div class="item" v-for="game in showGamesByPS4" :key="game.id">
                <router-link tag="div" :to="{ name : 'Id', params: {id: game.id}}" class="card" title="Перейти к игре">
                  <div class="card-genre" v-text="game.genre"></div>
                  <div class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                  </div>
                  <img v-bind:src="game.thumbnail" class="card-image">
                </router-link>
              </div>
            </div>
          </vk-tabs-item>

          <vk-tabs-item v-bind:title="'МОИ ' + '(' + this.$store.state.wishlistIds.length + ')'">
            <div class="wrapper container">
              <div v-if="isEmpty">
                <p>Ваш список избранных игр пуст. Чтобы добавить игру в избранное, на странице игры нажмите на значок звёздочки рядом с названием игры. <br> Чтобы удалить игру из избранного - нажмите на звёздочку ещё раз.</p>
              </div>
              <div v-else class="item" v-for="game in showLikedGames" :key="game.id">
                <router-link tag="div" :to="{ name : 'Id', params: {id: game.id}}" class="card" title="Перейти к игре">
                  <div class="card-genre" v-text="game.genre"></div>
                  <div class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                  </div>
                  <img v-bind:src="game.thumbnail" class="card-image">
                </router-link>
              </div>
            </div>
          </vk-tabs-item>

        </vk-tabs>
      </div>
    </section>

    <div class="footer">
    <div class="container container-footer">
      <div class="logo">
        <router-link class="about-link" tag="a" to="/about" title="О нас">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
        </router-link>
      </div>
      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>
      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>
      <div class="copyright">
        &#9400; Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте
      </div>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  name: 'home',
  data () {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL,
      search: '',
      category: '',
      games: [],
      isOpened: false,
      isSwitched: false,
      isEmpty: false,
      genre: 'все',
      isChild: false
    }
  },
  methods: {
    showInput: function () {
      if (this.$refs.buttonGame.classList.contains('switched')) {
        this.isOpened = !this.isOpened
        this.isSwitched = !this.isSwitched
        this.search = ''
      } else {
        this.isOpened = !this.isOpened
        this.isSwitched = !this.isSwitched
        this.$nextTick(function () {
          this.$refs.searchGame.focus()
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadGames')

    if (this.$store.state.wishlistIds.length == 0) {
      this.isEmpty = !this.isEmpty
    }
  },
  created () {
  },
  computed: {
    containerInput: function () {
      return {
        opened: this.isOpened
      }
    },
    buttonInput: function () {
      return {
        switched: this.isSwitched
      }
    },
    showGames () {
      return this.$store.getters.showAllGames(this.search, this.genre, this.isChild)
    },
    showGamesByHTC () {
      return this.$store.getters.showHTCGames(this.search, this.genre, this.isChild)
    },
    showGamesByPSVR () {
      return this.$store.getters.showPSVRGames(this.search, this.genre, this.isChild)
    },
    showGamesByPS4 () {
      return this.$store.getters.showPS4Games(this.search, this.genre, this.isChild)
    },
    showLikedGames () {
      return this.$store.getters.wishlist(this.search)
    }
  }
}
</script>
