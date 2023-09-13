exemplo com C#

<link href="~/Content/lib/bootstrap-select/bootstrap-select.css" rel="stylesheet" />

@Html.ListBox("ListSituacoes", new SelectList(ViewBag.Situacoes, "Codigo", "Nome"), new { id = "ddlSituacoes", @class = "selectpicker "+ @className, data_live_search = "true" })

<script src="~/Content/lib/bootstrap-select/bootstrap-select.js"></script>
<script>
    $('#ddlSituacoes').selectpicker(
        {
            noneSelectedText: 'Selecione...',
            noneResultsText: 'Nenhum registro encontrado {0}',
            selectAllText: 'Selecionar Todos',
            deselectAllText: 'Desmarcar Todos',
            actionsBox: true
        }
    );
</script>


ou 

<div class="col-md-4">
	<div class="form-group">
		<label class="control-label" for="ListSubAssuntos">Subtítulo</label>
		<select id="SubAssunto" name="ListSubAssuntos" class="form-control selectpicker" data-live-search="true" data-val="false" multiple disabled>
			<option>Selecione...</option>
		</select>
	</div>
</div>

Atributo [data-live-search=true] campo de pesquisa
Atributo [multiple] para multipla seleção

//iniciar componente via função
function iniciarComboSubTitulos(){
	$(sSubAssuntos)
		.selectpicker(
			{
				noneSelectedText: 'Selecione...',
				noneResultsText: 'Nenhum registro encontrado {0}',
				selectAllText: 'Selecionar Todos',
				deselectAllText: 'Desmarcar Todos',
				actionsBox: true
			});
	$(sSubAssuntos).selectpicker('refresh');
}

//exemplo de atualizar combo atreves de um outro componente
function atualizarComboSubTitulo(codigoTipoAssunto) {
	const urlSubTitulos = `/api/tipo-assunto/${codigoTipoAssunto}/assuntos`

	if (!codigoTipoAssunto) {
		desabilitarSubAssuntos();
		return;
	}

	$.get(urlSubTitulos).then((resposta) => {
		sSubAssuntos.innerHTML = '<option value="0"> Padrão </option>'

		const subassuntos = resposta;
		$(sSubAssuntos).selectpicker(
			{
				noneSelectedText: 'Selecione...',
				noneResultsText: 'Nenhum registro encontrado {0}',
				selectAllText: 'Selecionar Todos',
				deselectAllText: 'Desmarcar Todos',
				actionsBox: true
			}
		)

		subassuntos.forEach((subTitulo) => {
			const opt = document.createElement('option');
			opt.value = subTitulo.codigo;
			opt.innerHTML = subTitulo.nome;
			sSubAssuntos.appendChild(opt);
		});

		$(sSubAssuntos).selectpicker('refresh');

		sSubAssuntos.removeAttribute('disabled');
	})
}

const sSubAssuntos = document.querySelector('#SubAssunto');
const sCodigoTipoAssunto = document.querySelector('#CodigoTipoAssunto');

iniciarComboSubTitulos();
sCodigoTipoAssunto.addEventListener('change', (event) => atualizarComboSubTitulo(event.target.value));

//desabilitar campo
function desabilitarSubAssuntos() {
	sSubAssuntos.setAttribute('disabled', true);
	sSubAssuntos.selectedIndex = -1;
	$(sSubAssuntos).selectpicker('refresh');
}

let btnLimpar = document.querySelector('#btnLimpar')
btnLimpar.addEventListener('click', (event) => {
	desabilitarSubAssuntos();
})