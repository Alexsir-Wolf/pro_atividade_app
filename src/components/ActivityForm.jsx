import React from "react";

export default function ActivityForm(props) {
    
    
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">ID</label>
                <input
                    id="id"
                    type="text"
                    className="form-control"
                    readOnly
                    value={
                        Math.max.apply(
                            Math,
                            props.activities.map((item) => item.id)
                        ) + 1
                    }
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">Prioridade</label>
                <select id="priority" className="form-select">
                    <option defaultValue="0">Selecione...</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>

            <div className="col-md-6">
                <label className="form-label">Título</label>
                <input id="title" type="text" className="form-control" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Descrição</label>
                <input id="description" type="text" className="form-control" />
            </div>

            <hr />
            <div className="col-12">
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={props.addActivity}
                >
                    + Atividade
                </button>
            </div>
        </form>
    );
}
