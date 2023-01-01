<script lang='ts'>
	import { createSvelteTable, flexRender, getCoreRowModel, getSortedRowModel, type ColumnDef, type Table, type TableOptions } from "@tanstack/svelte-table";
	import { writable, type Readable } from "svelte/store";

  
  import type { IInvoice } from "../../interfaces/invoice.interface";

  let table: Readable<Table<IInvoice>>;

  const fetchInvoices = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices`)
        const defaultData = await res.json()

        const defaultColumns: ColumnDef<IInvoice>[] = [
      {
          accessorKey: 'invoiceId',
          id: 'invoiceId',
          cell: info => info.getValue(),
          header: ()=> 'Id (click for invoice detail)',

      },
      {
          accessorKey: 'client.clientName',
          cell: info => info.getValue(),
          header: ()=> 'Client Name',

      },
      {
          accessorKey: 'client.clientAddress',
          cell: info => info.getValue(),
          header: ()=> 'Client Address',

      },
      {
          accessorKey: 'invoiceDueDate',
          cell: info => info.getValue(),
          header: ()=> 'Due Date',

      },
      {
          accessorFn: row=> row.totalAmount,
          id: 'totalAmount',
          cell: info => info.getValue(),
          header: ()=> 'Total Amount($)',

      },
      {
          accessorFn: row=> row.status,
          id: 'status',
          cell: info => info.getValue(),
          header: ()=> 'Payment Status',

      },

      ];

      let sorting =[];

      const setSorting = updater => {
        if (updater instanceof Function) {
          sorting = updater(sorting)
        } else {
          sorting = updater
        }
        options.update( old => ({
          ...old,
          state: {
            ...old.state,
            sorting
          }
        }))
      }
  
      const options  = writable<TableOptions<IInvoice>>({
          data: defaultData,
          columns: defaultColumns,
          state: {
            sorting
          },
          onSortingChange: setSorting,
          getCoreRowModel: getCoreRowModel(),
          getSortedRowModel: getSortedRowModel(),
          debugTable: true,
      })

       table = createSvelteTable(options);
        const paid = defaultData.filter(value => value.status === 'Paid').length
        const notPaid = defaultData.filter(value => value.status === 'Not paid').length
        const voided = defaultData.filter(value => value.status === 'Void').length

        console.log(paid, notPaid, voided)

       return $table;
    }


    let getInvoices = fetchInvoices();
  </script>
{#await getInvoices }
  ...loading...
{:then $table}
<section class='grid font-extrabold text-3xl pt-10 h-screen grid-rows-[repeat(12,_1fr)] gap-5'> 
    <h1 class=''> Invoice Records</h1>
<div class='block w-full'>
  <table class="items-center bg-transparent w-full border-collapse ">
      <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        {#each $table.getHeaderGroups() as headerGroup}
          <tr>
            {#each headerGroup.headers as header}
              <th colSpan={header.colSpan} scope="col" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {#if !header.isPlaceholder}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                class:cursor-pointer={header.column.getCanSort()}
                class:select-none={header.column.getCanSort()}
                on:click={header.column.getToggleSortingHandler()}
                >
                <svelte:component this={flexRender(header.column.columnDef.header, header.getContext())} />
                <!-- {{
                  asc: ' 🔼',
                  desc: ' 🔽',
                }[header.column.getIsSorted().toString()] ?? ''} -->
                  </div>
                {/if}
              </th>
            {/each}
          </tr>
        {/each}
      </thead>
      <tbody>
          {#each $table.getRowModel().rows as row, index}
          <tr class={index % 2 === 0 ? 'bg-slate-200 ': ''}>
            
            {#each row.getVisibleCells() as cell}
              <td class= 'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 '>
                
                <a  href={ cell.column.columnDef.id === 'invoiceId' ? `#/invoice/${cell.getValue()}`: '#/invoice'}>

                    <svelte:component
                      this={flexRender(cell.column.columnDef.cell, cell.getContext())}
                      />
                </a>

              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
{/await}
