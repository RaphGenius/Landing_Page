import { useEffect, useRef, useState } from "react";
import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

export const DrawBox = () => {
  const canvasRef = useRef<any>(null);
  const contextRef = useRef<any>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1216;
    canvas.height = 1000;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "#137C8B";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }: any) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }: any) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };

  const saveImageToLocal = (event: any) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
  };

  return (
    <div className=" hidden lg:block relative bg-white mx-auto">
      <button
        className="absolute p-8 border-2 shadow-sm"
        onClick={() => setToErase()}
      >
        <BsFillEraserFill className="text-2xl" />
      </button>

      <button
        className="absolute left-[90px] p-8 border-2 shadow-sm"
        onClick={() => setToDraw()}
      >
        <BsFillPencilFill className="text-2xl" />
      </button>

      <canvas
        className="w-full"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
    </div>
  );
};
