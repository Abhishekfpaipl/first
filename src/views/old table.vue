 <!-- Vertical Table -->
          <!-- <a href="#" class="text-dark mt-4">Select Qty</a> -->
          <!-- <div class="d-flex align-items-start">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <td class="text-center small fw-bold">Amt</td>
                  <td class="text-center small fw-bold">Qty</td>
                  <td class="text-center small fw-bold">Sizes</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(piece, index) in pieces" :key="index" @click="showColorOptions(piece)" :class="piece.id == selectedPiece.id ? 'table-primary' : ''">
                  <td class="text-center">{{ piece.sub_total ? piece.sub_total : '-' }}</td>
                  <td class="text-center">
                    <input style="height: 25px" class="form-control form-control-sm" type="number"
                     v-model.lazy="quantity[piece.size]" >
                  </td>
              
                  <td class="text-center">{{ piece.size }}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-responsive">
              <thead>
                <tr>
                  <td class="text-center small fw-bold">Color</td>
                  <td class="text-center small fw-bold">Rate</td>
                  <td class="text-center small fw-bold">Pcs</td>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary align-items-center" v-for="(color, index) in selectedPiece.colors" :key="index">
                  <td class="" style="width: 30px; padding:11px 8px;">
                    <div class="rounded" :style="'height: 25px; background-color:' + color.bg"></div>
                  </td>
                  <td class="text-center px-0" style="padding: 11px 8px;"><i class="bi bi-currency-rupee"></i>{{ color.price }}</td>
                  <td class="text-center" style="padding:11px 8px;">{{ color.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div> -->

          <!-- <div class="d-flex flex-column mb-4">
            <div class="d-flex justify-content-around" >
             <p>₹68,400</p>
             <p>150</p>
            </div>
            <div class="d-flex justify-content-around">
             <p class="fw-bold">Total Qantity</p>
             <p class="fw-bold">Total Price</p>
            </div>
          </div>-->