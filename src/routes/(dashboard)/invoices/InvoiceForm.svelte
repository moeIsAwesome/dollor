<script>
  import Button from '$lib/components/Button.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';
</script>

<h2 class="mb-7 font-sansSerif text-3xl font-bold text-daisyBush">
  Add an Invoice
</h2>

<form class="grid grid-cols-6 gap-x-5 bg-blue-950">
  <!-- Client -->
  <div class="field col-span-2 bg-red-700">
    <label for="client">Client</label>
    <select class="w-1/2" name="client" id="client">
      <option value="zeal">ZEAL</option>
    </select>
  </div>
  <div class="field col-span-2 flex gap-x-5 items-end bg-yellow-200">
    <div class="text-base font-bold text-monsoon leading-[3.5rem]">OR</div>
    <Button
      label="+Client"
      onClick={() => {
        console.log('clicked');
      }}
      style={'outline'}
      isAnimated={false}
    />
  </div>
  <!-- InvoiceID -->

  <div class="field col-span-2 bg-red-300">
    <label for="id">Invoice ID</label>
    <input type="number" name="id" />
  </div>
  <!-- DueDate -->

  <div class="field col-span-2">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" />
  </div>
  <!-- IssueDate -->
  <div class="field col-span-2 col-start-5 bg-slate-500">
    <label for="issueDate">Issue Date</label>
    <input type="date" name="issueDate" />
  </div>
  <!-- Subject -->
  <div class="field col-span-6 bg-slate-700">
    <label for="subject">Subject</label>
    <input type="text" name="subject" />
  </div>
  <!-- LineItems -->

  <div class="field col-span-6 bg-teal-200">Line Items</div>
  <!-- Notes -->
  <div class="field col-span-6 bg-red-300">
    <label for="notes"
      >Notes<span class="font-normal">(Optional, displayed on invoice)</span>
    </label>
    <textarea name="notes" id="notes" />
  </div>
  <!-- Terms -->

  <div class="field col-span-6 bg-pink-300">
    <label for="terms"
      >Terms <span class="font-normal"
        >(Optional, Enter your terms and conditions)</span
      ></label
    >
    <textarea name="terms" id="terms" />
    <div class="text-xs text-gray-400">
      Formatting tips <strong>*bold*</strong>,<em>_italics</em>
    </div>
  </div>
  <!-- Buttons -->

  <div class="field col-span-2 bg-gray-500">
    <!-- Only be visible if editing -->
    <Button
      style="textOnly"
      label="Delete"
      isAnimated={false}
      onClick={() => {}}
      iconLeft={Trash}
    />
  </div>
  <div class="field col-span-4 flex justify-end gap-x-5 bg-yellow-200">
    <Button
      label="Cancel"
      style="secondary"
      isAnimated={false}
      onClick={() => {}}
    />
    <Button label="save" onClick={() => {}} />
  </div>
</form>
