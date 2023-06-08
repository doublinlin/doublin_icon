<template>
<div class="row g-2 row-cols-lg-6 row-cols-md-5 row-cols-sm-4 row-cols-3 mt-1">
  <div class="col" 
        v-for="(htmlEntity, i) in HtmlEntities"
        :key="htmlEntity.css"
        >
        <a type="button" class="block_icon w-100 h-100" data-bs-toggle="modal" :data-bs-target="'#htmlEntity'+ i ">
            <span class="htmlEntity" alt="htmlEntity">{{ htmlEntity.character }}</span>
            <div class="text-center mt-2">
                <div>{{ htmlEntity.name }}</div>
            </div>
        </a>
  </div>
</div>
<!-- Modal -->
<div v-for="(htmlEntity, i) in HtmlEntities"
          :key="htmlEntity">
  <div class="modal fade" :id="'htmlEntity'+ i " data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close align-self-end p-2" data-bs-dismiss="modal" aria-label="Close"></button>
        <!-- <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">說明</h5>
        </div> -->
        <div class="modal-body">
            <div class="row">
              <div class="col-sm-6">
                <div class="text-center">
                  <div class="htmlEntity_lg" alt="htmlEntity">{{ HtmlEntities[i].character }}</div>
                  <h5>{{ HtmlEntities[i].name }}</h5>
                </div>
              </div>
              <div class="col-sm-6 space_sm_mtNoneToMtSm">
                <div class="align_sm_leftToCenter">
                  <div class="row">
                    <div class="col-6">
                      <div class="HtmlEntities_name">Unicode</div>
                    </div>
                    <div class="col-6">
                      {{ HtmlEntities[i].unicode }}
                    </div>
                    <div class="col-6">
                      <div class="HtmlEntities_name">Hex Code</div>
                    </div>
                    <div class="col-6">
                      {{ HtmlEntities[i].hex }}
                    </div>
                    <div class="col-6">
                      <div class="HtmlEntities_name">Html Code</div>
                    </div>
                    <div class="col-6">
                      {{ HtmlEntities[i].dec }}
                    </div>
                    <div class="col-6">
                      <div class="HtmlEntities_name">Html Entity</div>
                    </div>
                    <div class="col-6">
                      {{ HtmlEntities[i].entity }}
                    </div>
                    <div class="col-6">
                      <div class="HtmlEntities_name">Css Code</div>
                    </div>
                    <div class="col-6">
                      {{ HtmlEntities[i].css }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4">
                  <div class="row">
                    <div class="col-sm-6">
                      <div>Hex、Html 使用範例</div>
                      <pre>&lt;span>{{ HtmlEntities[i].entity }}&lt;/span></pre>
                    </div>
                    <div class="col-sm-6">
                      <div>Css 使用範例</div>
                      <pre>span { content: "{{ HtmlEntities[i].css }}"; }</pre>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: [
    'HtmlEntities'
  ]
}
</script>

<style scoped>
.block_icon {
    background-color: #fff;
    border-radius: .3rem;
    padding: .5rem;
    text-align: center;
}
a {
    color: inherit;
    text-decoration: none;
}
pre {
  background-color: #f3f3f3;
  padding: .4rem;
  border-radius: 5px;
  /* white-space: pre-wrap;
  word-wrap: break-word; */
}
.HtmlEntities_name {
  color: darkgrey;
  text-align: start;
}
.htmlEntity {
    font-size: 32px;
}
.htmlEntity_lg {
    font-size: 60px;
}
/* .col_align {
    flex: 0 0%;
} */
.space_sm_mtNoneToMtSm {
  margin-top: 0;
}
.icon { 
  content: "\2192"; 
}
@media screen and (max-width: 576px) {
  .HtmlEntities_name {
    color: darkgrey;
    text-align: end;
  }
  .space_sm_mtNoneToMtSm {
    margin-top: 1rem;
  }
}
</style>
