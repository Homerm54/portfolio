import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFocus } from "lib/hooks";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "..";
import { Container, Elements } from "./style";
import { InputProps, PasswordProps, SearchProps } from "./types";

const Input = ({
  id,
  sufix,
  label,
  value,
  prefix,
  onChange,
  errorText,
  helperText,
  allowClear,
  onClear,
  readOnly,
  disabled,
  error = false,
  size = 'medium',
  color = "basic",
  fullWidth = false,
  placeholderGrayScale = 400,
  ...rest
}: InputProps): JSX.Element => {
  const [setRef, isFocused, inputRef] = useFocus<HTMLInputElement>();
  const [showClearIcon, setShowClearIcon] = useState(false);
  
  const hoverSufix = (
    <Button
      type="unstyled"
      icon={
        <FontAwesomeIcon
          style={{ fontSize: 'small' }}
          icon="circle-xmark"
        />
      }
      onClick={() => {
        if (onClear) onClear();
        if (!onChange && inputRef.current) {
          // Uncontrolled component, update state ourselves
          inputRef.current.value = '';
          setShowClearIcon(false);
        }
      }}
    />
  );

  useEffect(() =>{ setShowClearIcon(Boolean(value)); }, [value]);
  
  
  return (
    <Container.Parent
      $color={color}
      $error={error}
      $fullWidth={fullWidth}
      $size={size}
      $disabled={disabled}
    >
      { label && <Elements.Label $size={size} htmlFor={id}>{label}</Elements.Label> }

      <Container.Input
        $disabled={disabled}
        $size={size}
        $color={color}
        $error={error}
        $isFocused={isFocused}
        $isReadOnly={readOnly}
      >
        { prefix && <Elements.Prefix>{prefix}</Elements.Prefix> }

        <Elements.Input
          id={id}
          $placeholderScale={placeholderGrayScale}
          disabled={disabled}
          ref={setRef}
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e);
            else setShowClearIcon(Boolean(e.currentTarget.value));
          }}
          readOnly={readOnly}
          {...rest}
        />

        {allowClear
          ? <Elements.Sufix>{(showClearIcon && allowClear) ? hoverSufix : sufix}</Elements.Sufix>
          : sufix && <Elements.Sufix>{(showClearIcon && allowClear) ? hoverSufix : sufix}</Elements.Sufix>
        }
      </Container.Input>

      {(errorText || helperText)
        && <Elements.Text $size={size}>{error ? errorText : helperText}</Elements.Text>
      }
    </Container.Parent>
  );
};

const PasswordInput = (props: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const sufix = (
    <Button
      type="unstyled"
      icon={
        <FontAwesomeIcon
          style={{ fontSize: 'small'}}
          icon={showPassword ? 'eye-slash' : 'eye'}
        />
      }
      onClick={() => setShowPassword(!showPassword)}
    />
  );

  return (
    <Input
      sufix={sufix}
      type={showPassword ? 'text' : 'password'}
      {...props}
    />
  );
};

const SearchInput = ({ onSearch, ...rest }: SearchProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const theme = useTheme();

  const sufix = (
    <Button
      type="unstyled"
      style={{
        borderRadius: 0,
        borderLeft: `2px solid ${theme.palette.grey[600]}`,
      }}
      icon={
        <FontAwesomeIcon
          // style={{ fontSize: 'small'}}
          icon="magnifying-glass"
        />
      }
      onClick={() => onSearch(currentValue)}
    />
  );

  return (
    <Input
      sufix={sufix}
      value={currentValue}
      onChange={(e) => setCurrentValue(e.currentTarget.value)}
      {...rest}
    />
  );
};

Input.Search = SearchInput;
Input.Password = PasswordInput;

export { Input };