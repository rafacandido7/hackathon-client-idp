import { useState } from 'react';
import { TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Person, Star, Description, SentimentVeryDissatisfied, SentimentSatisfied, ThumbUpAlt, Favorite } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';

import './styles.css';

const validationSchema = yup.object().shape({
  registroAcademico: yup.string().required('Campo obrigatório'),
  nome: yup.string().required('Campo obrigatório'),
  pedido: yup.string().required('Campo obrigatório'),
});

const UserForm = () => {
  const [avaliacao, setAvaliacao] = useState('');
  const [comentario, setComentario] = useState('');
  const [secaoAtual, setSecaoAtual] = useState(1);

  const handleNext = () => {
    if (secaoAtual === 1) {
      if (formik.errors.registroAcademico || formik.errors.nome || formik.errors.pedido) {
        return;
      }
    }
    setSecaoAtual(secaoAtual + 1);
  };

  const handleBack = () => {
    setSecaoAtual(secaoAtual - 1);
  };

  const handleAvaliacaoChange = (e) => {
    setAvaliacao(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      registroAcademico: '',
      nome: '',
      pedido: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({
        ...values,
        avaliacao,
        comentario,
      });
      resetForm();
      setAvaliacao('');
      setComentario('');
      setSecaoAtual(1);
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const isCadastroInvalido =
    formik.errors.registroAcademico ||
    formik.errors.nome ||
    formik.errors.pedido;

  return (
    <div className='content'>
     <Box
      sx={{
        width: '40%',
        height: '50%',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '3px solid white',
      }}
    >
      <div className="emoji-container">
          <Person
            className={`emoji ${secaoAtual === 1 ? 'active' : ''}`}
            onClick={() => setSecaoAtual(1)}
            style={{ fontSize: '3rem', cursor: 'pointer' }}
          />
          <Star
            className={`emoji ${secaoAtual === 2 ? 'active' : ''}`}
            onClick={() => setSecaoAtual(2)}
            style={{ fontSize: '3rem', cursor: 'pointer' }}
          />
          <Description
            className={`emoji ${secaoAtual === 3 ? 'active' : ''}`}
            onClick={() => setSecaoAtual(3)}
            style={{ fontSize: '3rem', cursor: 'pointer' }}
          />
        </div>
      <form onSubmit={formik.handleSubmit}>
        {secaoAtual === 1 && (
          <>
            <Typography variant='h6'>Cadastro</Typography>
            <TextField
              className='registro_academico'
              id='registro_academico'
              name='registroAcademico'
              label='Registro Acadêmico'
              value={formik.values.registroAcademico}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.registroAcademico && Boolean(formik.errors.registroAcademico)}
              helperText={formik.touched.registroAcademico && formik.errors.registroAcademico}
              onKeyDown={handleKeyDown}
            />
            <br /><br />
            <TextField
              className='registro_nome'
              id='registro_nome'
              name='nome'
              label='Nome'
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
              onKeyDown={handleKeyDown}
            />
            <br /><br />
            <TextField
              className='registro_pedido'
              id='registro_pedido'
              name='pedido'
              label='Pedido'
              value={formik.values.pedido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pedido && Boolean(formik.errors.pedido)}
              helperText={formik.touched.pedido && formik.errors.pedido}
              onKeyDown={handleKeyDown}
            />
            <br /><br />
            <Button className='botao_avancar' type='button' onClick={handleNext} disabled={isCadastroInvalido}>
              Avançar
            </Button>
          </>
        )}

        {secaoAtual === 2 && (
          <>
            <Typography variant='h6'>Avaliação</Typography>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Avalie sua experiência:</FormLabel>
              <RadioGroup value={avaliacao} onChange={handleAvaliacaoChange}>
                <FormControlLabel
                  value='ruim'
                  control={<Radio />}
                  label={
                    <>
                      <SentimentVeryDissatisfied className={`emoji ${avaliacao === 'ruim' ? 'active' : ''}`} />
                      <span>Ruim</span>
                    </>
                  }
                />
                <FormControlLabel
                  value='bom'
                  control={<Radio />}
                  label={
                    <>
                      <SentimentSatisfied className={`emoji ${avaliacao === 'bom' ? 'active' : ''}`} />
                      <span>Bom</span>
                    </>
                  }
                />
                <FormControlLabel
                  value='satisfeito'
                  control={<Radio />}
                  label={
                    <>
                      <ThumbUpAlt className={`emoji ${avaliacao === 'satisfeito' ? 'active' : ''}`} />
                      <span>Satisfeito</span>
                    </>
                  }
                />
                <FormControlLabel
                  value='perfeito'
                  control={<Radio />}
                  label={
                    <>
                      <Favorite className={`emoji ${avaliacao === 'perfeito' ? 'active' : ''}`} />
                      <span>Perfeito</span>
                    </>
                  }
                />
              </RadioGroup>
            </FormControl>
            <br /><br />
            <TextField
              className='comentario'
              id='comentario'
              name='comentario'
              label='Comentário'
              value={comentario}
              onChange={handleComentarioChange}
              onKeyDown={handleKeyDown}
            />
            <br /><br />
            <Button onClick={handleBack}>Voltar</Button>
            <Button className='botao_avancar' type='button' onClick={handleNext}>
              Avançar
            </Button>
          </>
        )}

        {secaoAtual === 3 && (
          <>
            <Typography variant='h6' className='finalizacao_3'>Finalização</Typography>
            <Typography className='registro_3'>Registro Acadêmico: {formik.values.registroAcademico}</Typography>
            <Typography className='nome_3'>Nome: {formik.values.nome}</Typography>
            <Typography className='pedido_3'>Pedido: {formik.values.pedido}</Typography>
            <Typography className='avaliacao_3'>Avaliação: {avaliacao}</Typography>
            <Typography className='comentario_3'>Comentário: {comentario}</Typography>
            <Button onClick={handleBack}>Voltar</Button>
            <Button className='botao_enviar' type='submit'>
              Enviar
            </Button>
          </>
        )}
      </form>
      </Box>

    </div>
  );
};

export default UserForm;
